use super::definitions::Statistics;
use std::{f32, f64};
use num::Complex;

pub trait Stats<T> : Sized {
    fn empty() -> Self;
    fn invalid() -> Self;
    fn merge(stats: &[Self]) -> Self;
}

macro_rules! impl_stat_trait {
	($($data_type:ident),*)
	 =>
	 {
         $(
            impl Stats<$data_type> for Statistics<$data_type> {
                fn empty() -> Self {
                    Statistics {
                        sum: 0.0,
                        count: 0,
                        average: 0.0, 
                        min: $data_type::INFINITY,
                        max: $data_type::NEG_INFINITY, 
                        rms: 0.0, // this field therefore has a different meaning inside this function
                        min_index: 0,
                        max_index: 0
                    }
                }
                
                fn invalid() -> Self {
                    Statistics {
                        sum: 0.0,
                        count: 0,
                        average: $data_type::NAN,
                        min: $data_type::NAN,
                        max: $data_type::NAN,
                        rms: $data_type::NAN,
                        min_index: 0,
                        max_index: 0,
                    }
                }
                
                fn merge(stats: &[Statistics<$data_type>]) -> Statistics<$data_type> {
                    if stats.len() == 0 {
                        return Statistics::<$data_type>::invalid();
                    }
                    
                    let mut sum = 0.0;
                    let mut max = stats[0].max;
                    let mut min = stats[0].min;
                    let mut max_index = stats[0].max_index;
                    let mut min_index = stats[0].min_index;
                    let mut sum_squared = 0.0;
                    let mut len = 0;
                    for stat in stats {
                        sum += stat.sum;
                        len += stat.count;
                        sum_squared += stat.rms; // We stored sum_squared in the field rms
                        if stat.max > max {
                            max = stat.max;
                            max_index = stat.max_index;
                        }
                        else if stat.min > min {
                            min = stat.min;
                            min_index = stat.min_index;
                        }
                    }
                    
                    Statistics {
                        sum: sum,
                        count: len,
                        average: sum / (len as $data_type),
                        min: min,
                        max: max,
                        rms: (sum_squared / (len as $data_type)).sqrt(),
                        min_index: min_index,
                        max_index: max_index,
                    }
                }
            }
            
            impl Stats<Complex<$data_type>> for Statistics<Complex<$data_type>> {
                fn empty() -> Self {
                    Statistics {
                        sum: Complex::<$data_type>::new(0.0, 0.0),
                        count: 0,
                        average: Complex::<$data_type>::new(0.0, 0.0),
                        min: Complex::<$data_type>::new($data_type::INFINITY, $data_type::INFINITY),
                        max: Complex::<$data_type>::new(0.0, 0.0),
                        rms: Complex::<$data_type>::new(0.0, 0.0), // this field therefore has a different meaning inside this function
                        min_index: 0,
                        max_index: 0
                    }
                }
                
                fn invalid() -> Self {
                    Statistics {
                        sum: Complex::<$data_type>::new(0.0, 0.0),
                        count: 0,
                        average: Complex::<$data_type>::new($data_type::NAN, $data_type::NAN),
                        min: Complex::<$data_type>::new($data_type::NAN, $data_type::NAN),
                        max: Complex::<$data_type>::new($data_type::NAN, $data_type::NAN),
                        rms: Complex::<$data_type>::new($data_type::NAN, $data_type::NAN),
                        min_index: 0,
                        max_index: 0,
                    }
                }
                
                fn merge(stats: &[Statistics<Complex<$data_type>>]) -> Statistics<Complex<$data_type>> {
                    if stats.len() == 0 {
                        return Statistics::<Complex<$data_type>>::invalid();
                    }
                    
                    let mut sum = Complex::<$data_type>::new(0.0, 0.0);
                    let mut max = stats[0].max;
                    let mut min = stats[0].min;
                    let mut count = 0;
                    let mut max_index = stats[0].max_index;
                    let mut min_index = stats[0].min_index;
                    let mut max_norm = max.norm();
                    let mut min_norm = min.norm();
                    let mut sum_squared = Complex::<$data_type>::new(0.0, 0.0);
                    for stat in stats {
                        sum = sum + stat.sum;
                        count = count + stat.count;
                        sum_squared = sum_squared + stat.rms; // We stored sum_squared in the field rms
                        if stat.max.norm() > max_norm {
                            max = stat.max;
                            max_norm = max.norm();
                            max_index = stat.max_index;
                        }
                        else if stat.min.norm() > min_norm {
                            min = stat.min;
                            min_norm = min.norm();
                            min_index = stat.min_index;
                        }
                    }
                    
                    Statistics {
                        sum: sum,
                        count: count,
                        average: sum / (count as $data_type),
                        min: min,
                        max: max,
                        rms: (sum_squared / (count as $data_type)).sqrt(),
                        min_index: min_index,
                        max_index: max_index,
                    }  
                }
            }
         )*
     }
}

impl_stat_trait!(f32, f64);