use multicore_support::{Chunk, Complexity};
use super::super::general::{
	DataVector,
    GenericVectorOperations,
	RealVectorOperations};
use super::DataVector32;
use simd::f32x4;
use simd_extensions::SimdExtensions;
use num::traits::Float;

#[inline]
impl RealVectorOperations for DataVector32
{
	type ComplexPartner = DataVector32;
	
	fn real_offset(mut self, offset: f32) -> DataVector32
	{
        {
            let len = self.len();
            let mut array = &mut self.data;
            Chunk::execute_partial_with_arguments(Complexity::Small, &mut array, len, 1, offset, |array, v| {
                for i in 0..array.len()
                {
                    array[i] += v;
                }
            });
        }
		self
	}
	
	fn real_scale(mut self, factor: f32) -> DataVector32
	{
		{
			let data_length = self.len();
			let scalar_length = data_length % 4;
			let vectorization_length = data_length - scalar_length;
			let mut array = &mut self.data;
			Chunk::execute_partial_with_arguments(Complexity::Small, &mut array, vectorization_length, 4, factor, |array, value| {
                let mut i = 0;
                while i < array.len()
                { 
                    let vector = f32x4::load(array, i);
                    let scaled = vector.scale_real(value);
                    scaled.store(array, i);
                    i += 4;
                }
            });
			for i in vectorization_length..data_length
			{
				array[i] = array[i] * factor;
			}
		}
		
		self
	}
	
	fn real_abs(mut self) -> DataVector32
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial(Complexity::Small, &mut array, length, 1, |chunk| {
                for i in 0..chunk.len() {
                    chunk[i] = chunk[i].abs();
                }
            });
		}
		self
	}
	
	fn real_sqrt(mut self) -> DataVector32
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial(Complexity::Medium, &mut array, length, 1, |array| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i].sqrt();
                    i += 1;
                }
            });
		}
		self
	}
	
	fn real_square(mut self) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial(Complexity::Medium, &mut array, length, 1, |array| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i] * array[i];
                    i += 1;
                }
            });
		}
		self
	}
	
	fn real_root(mut self, degree: Self::E) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial_with_arguments(Complexity::Medium, &mut array, length, 1, degree, |array, base| {
                let base = 1.0 / base;
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i].powf(base);
                    i += 1;
                }
            });
		}
		self
	}
	
	fn real_power(mut self, exponent: Self::E) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial_with_arguments(Complexity::Medium, &mut array, length, 1, exponent, |array, base| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i].powf(base);
                    i += 1;
                }
            });
		}
		self
	}
	
	fn real_logn(mut self) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial(Complexity::Medium, &mut array, length, 1, |array| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i].ln();
                    i += 1;
                }
            });
		}
		self
	}
	
	fn real_expn(mut self) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial(Complexity::Medium, &mut array, length, 1, |array| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i].exp();
                    i += 1;
                }
            });
		}
		self
	}

	fn real_log_base(mut self, base: Self::E) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial_with_arguments(Complexity::Medium, &mut array, length, 1, base, |array, base| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i].log(base);
                    i += 1;
                }
            });
		}
		self
	}
	
	fn real_exp_base(mut self, base: Self::E) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial_with_arguments(Complexity::Medium, &mut array, length, 1, base, |array, base| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = base.powf(array[i]);
                    i += 1;
                }
            });
		}
		self
	}
	
	fn to_complex(self) -> DataVector32
	{
		let mut result = self.zero_interleave();
		result.is_complex = true;
		result
	}
	
	fn wrap(mut self, divisor: Self::E) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial_with_arguments(Complexity::Small, &mut array, length, 1, divisor, |array, value| {
                let mut i = 0;
                while i < array.len() {
                    array[i] = array[i] % value;
                    i += 1;
                }
            });
		}
		self
	}
	
	fn unwrap(mut self, divisor: Self::E) -> Self
	{
		{
			let data_length = self.len();
			let mut data = &mut self.data;
			let mut i = 0;
			let mut j = 1;
			let half = divisor / 2.0;
			while j < data_length {
				let mut diff = data[j] - data[i];
				diff = diff % divisor;
				if diff > half {
					diff -= divisor;
				}
				else if diff < -half {
					diff += divisor;
				}
				data[j] = data[i] + diff;
				
				i += 1;
				j += 1;
			}
		}
		self
	}
    
    fn real_sin(mut self) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial(Complexity::Medium, &mut array, length, 1, |array| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i].sin();
                    i += 1;
                }
            });
		}
		self
	}
    
    fn real_cos(mut self) -> Self
	{
		{
			let mut array = &mut self.data;
			let length = array.len();
			Chunk::execute_partial(Complexity::Medium, &mut array, length, 1, |array| {
                let mut i = 0;
                while i < array.len()
                {
                    array[i] = array[i].cos();
                    i += 1;
                }
            });
		}
		self
	}
}