use simd::f32x4;
use simd::x86::sse3::Sse3F32x4;
use num::complex::Complex;
use super::Simd;
use simd::x86::sse2::f64x2;

pub type Reg32 = f32x4;

pub type Reg64 = f64x2;

impl Simd<f32> for f32x4 {
    type Array = [f32; 4];

    #[inline]
    fn to_array(self) -> Self::Array {
        let mut target = [0.0; 4];
        self.store(&mut target, 0);
        target
    }

    type ComplexArray = [Complex<f32>; 2];

    #[inline]
    fn len() -> usize {
        4
    }

    #[inline]
    fn load_wrap_unchecked(array: &[f32], idx: usize) -> f32x4 {
        let mut temp = [0.0; 4];
        for i in 0..temp.len() {
            temp[i] = unsafe { *array.get_unchecked((idx + i) % array.len()) };
        }
        f32x4::load(&temp, 0)
    }

    #[inline]
    fn from_complex(value: Complex<f32>) -> f32x4 {
        f32x4::new(value.re, value.im, value.re, value.im)
    }

    #[inline]
    fn add_real(self, value: f32) -> f32x4 {
        let increment = f32x4::splat(value);
        self + increment
    }

    #[inline]
    fn add_complex(self, value: Complex<f32>) -> f32x4 {
        let increment = f32x4::new(value.re, value.im, value.re, value.im);
        self + increment
    }

    #[inline]
    fn scale_real(self, value: f32) -> f32x4 {
        let scale_vector = f32x4::splat(value);
        self * scale_vector
    }

    #[inline]
    fn scale_complex(self, value: Complex<f32>) -> f32x4 {
        let scaling_real = f32x4::splat(value.re);
        let scaling_imag = f32x4::splat(value.im);
        let parallel = scaling_real * self;
        // There should be a shufps operation which shuffles the vector self
        let shuffled = f32x4::new(self.extract(1),
                                  self.extract(0),
                                  self.extract(3),
                                  self.extract(2));
        let cross = scaling_imag * shuffled;
        parallel.addsub(cross)
    }

    #[inline]
    fn mul_complex(self, value: f32x4) -> f32x4 {
        let scaling_real = f32x4::new(value.extract(0),
                                      value.extract(0),
                                      value.extract(2),
                                      value.extract(2));

        let scaling_imag = f32x4::new(value.extract(1),
                                      value.extract(1),
                                      value.extract(3),
                                      value.extract(3));

        let parallel = scaling_real * self;
        // There should be a shufps operation which shuffles the vector self
        let shuffled = f32x4::new(self.extract(1),
                                  self.extract(0),
                                  self.extract(3),
                                  self.extract(2));


        let cross = scaling_imag * shuffled;
        parallel.addsub(cross)
    }

    #[inline]
    fn div_complex(self, value: f32x4) -> f32x4 {
        let scaling_imag = f32x4::new(self.extract(0),
                                      self.extract(0),
                                      self.extract(2),
                                      self.extract(2));
        let scaling_real = f32x4::new(self.extract(1),
                                      self.extract(1),
                                      self.extract(3),
                                      self.extract(3));
        let parallel = scaling_real * value;
        // There should be a shufps operation which shuffles the vector self
        let shuffled = f32x4::new(value.extract(1),
                                  value.extract(0),
                                  value.extract(3),
                                  value.extract(2));

        let cross = scaling_imag * shuffled;
        let mul = parallel.addsub(cross);
        let square = shuffled * shuffled;
        let square_shuffled = f32x4::new(square.extract(1),
                                         square.extract(0),
                                         square.extract(3),
                                         square.extract(2));

        let sum = square + square_shuffled;
        let div = mul / sum;
        f32x4::new(div.extract(1),
                   div.extract(0),
                   div.extract(3),
                   div.extract(2))
    }

    #[inline]
    fn complex_abs_squared(self) -> f32x4 {
        let squared = self * self;

        squared.hadd(squared)
    }

    #[inline]
    fn complex_abs(self) -> f32x4 {
        let squared = self * self;

        let squared_sum = squared.hadd(squared);
        squared_sum.sqrt()
    }

    #[inline]
    fn complex_abs_squared2(self) -> f32x4 {

        let abs = self.complex_abs_squared();
        f32x4::new(abs.extract(0),
                   abs.extract(2),
                   abs.extract(1),
                   abs.extract(3))
    }

    #[inline]
    fn complex_abs2(self) -> f32x4 {

        let abs = self.complex_abs();
        f32x4::new(abs.extract(0),
                   abs.extract(2),
                   abs.extract(1),
                   abs.extract(3))
    }

    #[inline]
    fn sqrt(self) -> f32x4 {
        self.sqrt()
    }

    #[inline]
    fn store_half_unchecked(self, target: &mut [f32], index: usize) {
        unsafe {
            *target.get_unchecked_mut(index) = self.extract(0);
            *target.get_unchecked_mut(index + 1) = self.extract(1);
        }
    }

    #[inline]
    fn sum_real(&self) -> f32 {
        self.extract(0) + self.extract(1) + self.extract(2) + self.extract(3)
    }

    #[inline]
    fn sum_complex(&self) -> Complex<f32> {
        Complex::<f32>::new(self.extract(0) + self.extract(2),
                            self.extract(1) + self.extract(3))
    }
}

impl Simd<f64> for f64x2 {
    type Array = [f64; 2];

    #[inline]
    fn to_array(self) -> Self::Array {
        let mut target = [0.0; 2];
        self.store(&mut target, 0);
        target
    }

    type ComplexArray = [Complex<f64>; 1];

    #[inline]
    fn len() -> usize {
        2
    }

    #[inline]
    fn load_wrap_unchecked(array: &[f64], idx: usize) -> f64x2 {
        let mut temp = [0.0; 2];
        for i in 0..temp.len() {
            temp[i] = unsafe { *array.get_unchecked((idx + i) % array.len()) };
        }

        f64x2::load(&temp, 0)
    }

    #[inline]
    fn from_complex(value: Complex<f64>) -> f64x2 {
        f64x2::new(value.re, value.im)
    }

    #[inline]
    fn add_real(self, value: f64) -> f64x2 {
        let increment = f64x2::splat(value);
        self + increment
    }

    #[inline]
    fn add_complex(self, value: Complex<f64>) -> f64x2 {
        let increment = f64x2::new(value.re, value.im);
        self + increment
    }

    #[inline]
    fn scale_real(self, value: f64) -> f64x2 {
        let scale_vector = f64x2::splat(value);
        self * scale_vector
    }

    #[inline]
    fn scale_complex(self, value: Complex<f64>) -> f64x2 {
        let complex = Complex::new(self.extract(0), self.extract(1));
        let result = complex * value;
        f64x2::new(result.re, result.im)
    }

    #[inline]
    fn mul_complex(self, value: f64x2) -> f64x2 {
        let complex = Complex::new(self.extract(0), self.extract(1));
        let value = Complex::new(value.extract(0), value.extract(1));
        let result = complex * value;
        f64x2::new(result.re, result.im)
    }

    #[inline]
    fn div_complex(self, value: f64x2) -> f64x2 {
        let complex = Complex::new(self.extract(0), self.extract(1));
        let value = Complex::new(value.extract(0), value.extract(1));
        let result = complex / value;
        f64x2::new(result.re, result.im)
    }

    #[inline]
    fn complex_abs_squared(self) -> f64x2 {
        let a = self.extract(0);
        let b = self.extract(1);
        let result = a * a + b * b;
        f64x2::new(result, 0.0)
    }

    #[inline]
    fn complex_abs(self) -> f64x2 {
        let a = self.extract(0);
        let b = self.extract(1);
        let result = (a * a + b * b).sqrt();
        f64x2::new(result, 0.0)
    }
    #[inline]

    fn complex_abs_squared2(self) -> f64x2 {
        self.complex_abs_squared()
    }

    #[inline]
    fn complex_abs2(self) -> f64x2 {
        self.complex_abs()
    }

    #[inline]
    fn sqrt(self) -> f64x2 {
        f64x2::new(self.extract(0).sqrt(), self.extract(1).sqrt())
    }

    #[inline]
    fn store_half_unchecked(self, target: &mut [f64], index: usize) {
        unsafe {
            *target.get_unchecked_mut(index) = self.extract(0);
        }
    }

    #[inline]
    fn sum_real(&self) -> f64 {
        self.extract(0) + self.extract(1)
    }

    #[inline]
    fn sum_complex(&self) -> Complex<f64> {
        Complex::<f64>::new(self.extract(0), self.extract(1))
    }
}