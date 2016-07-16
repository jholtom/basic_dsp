initSidebarItems({"enum":[["DataVectorDomain","The domain of a data vector"],["ErrorReason","Enumeration of all error reasons"],["PaddingOption","An option which defines how a vector should be padded"]],"macro":[["try_vec!","Like `try!` but for operations returning a vector."]],"mod":[["combined_ops","This module allows to combine certain operations into one operation. Since one  many machines the speed of many DSP operations is limited by the memory bus speed  this approach may result in better register and cache usage and thus decrease  the pressure on the memory bus. As with all performance hints remember   rule number 1: Benchmark your code. This is especially true at this very early   state of the library."],["conv_types","Types around a convolution, see also https://en.wikipedia.org/wiki/Convolution."],["interop_facade","Clients using other programming languages should use the functions in this mod. Please refer to the other chapters of the help for documentation of the functions."],["window_functions","This mod contains a definition for window functions and provides implementations for a few standard windows. See the `WindowFunction` type for more information."]],"struct":[["ComplexFreqVector","A 1xN (one times N elements) or Nx1 data vector as used for most digital signal processing (DSP) operations. All data vector operations consume the vector they operate on and return a new vector. A consumed vector must not be accessed again."],["ComplexTimeVector","A 1xN (one times N elements) or Nx1 data vector as used for most digital signal processing (DSP) operations. All data vector operations consume the vector they operate on and return a new vector. A consumed vector must not be accessed again."],["GenericDataVector","A 1xN (one times N elements) or Nx1 data vector as used for most digital signal processing (DSP) operations. All data vector operations consume the vector they operate on and return a new vector. A consumed vector must not be accessed again."],["MultiCoreSettings","Holds parameters which specify how multiple cores are used to execute an operation."],["RealFreqVector","A 1xN (one times N elements) or Nx1 data vector as used for most digital signal processing (DSP) operations. All data vector operations consume the vector they operate on and return a new vector. A consumed vector must not be accessed again."],["RealTimeVector","A 1xN (one times N elements) or Nx1 data vector as used for most digital signal processing (DSP) operations. All data vector operations consume the vector they operate on and return a new vector. A consumed vector must not be accessed again."],["Statistics","Statistics about the data in a vector"]],"trait":[["ComplexVectorOps","Defines all operations which are valid on `DataVectors` containing complex data. # Failures All operations in this trait fail with `VectorMustBeComplex` if the vector isn't in the complex number space."],["Convolution","Provides a convolution operation for data vectors."],["CrossCorrelation","Cross-correlation of data vectors. See also https://en.wikipedia.org/wiki/Cross-correlation"],["DataVector","DataVector gives access to the basic properties of all data vectors"],["DotProductOps","An operation which multiplies each vector element with a constant"],["FrequencyDomainOperations","Defines all operations which are valid on `DataVectors` containing frequency domain data. # Failures All operations in this trait fail with `VectorMustBeInFrquencyDomain` or `VectorMustBeComplex`  if the vector isn't in frequency domain and complex number space."],["FrequencyMultiplication","Provides a frequency response multiplication operation for data vectors."],["GenericVectorOps","Defines all operations which are valid on all `DataVectors`."],["Interpolation","Provides interpolation operations for real and complex data vectors. # Unstable This functionality has been recently added in order to find out if the definitions are consistent. However the actual implementation is lacking tests."],["OffsetOps","An operation which adds a constant to each vector element"],["RealInterpolation","Provides interpolation operations which are only applicable for real data vectors. # Failures All operations in this trait fail with `VectorMustBeReal` if the vector isn't in the real number space."],["RealNumber","A real floating pointer number intended to abstract over `f32` and `f64`."],["RealVectorOps","Defines all operations which are valid on `DataVectors` containing real data. # Failures All operations in this trait fail with `VectorMustBeReal` if the vector isn't in the real number space."],["RededicateVector","This trait allows to change a vector type. The operations will convert a vector to a different type and set `self.len()` to zero. However `self.allocated_len()` will remain unchanged. The use case for this is to allow to reuse the memory of a vector for different operations."],["ScaleOps","An operation which multiplies each vector element with a constant"],["StatisticsOps","Calculates the statistics of the data contained in the vector."],["SymmetricFrequencyDomainOperations","Defines all operations which are valid on `DataVectors` containing frequency domain data and the data is assumed to half of complex conjugate symmetric spectrum round 0 Hz where  the 0 Hz element itself is real. # Failures All operations in this trait fail with `VectorMustBeInFrquencyDomain` if the vector isn't in frequency domain or with `VectorMustBeConjSymmetric` if the first element (0Hz) isn't real."],["SymmetricTimeDomainOperations","Defines all operations which are valid on `DataVectors` containing real time domain data. # Failures All operations in this trait fail with `VectorMustBeInTimeDomain` if the vector isn't in time domain or with `VectorMustHaveAnOddLength` if `self.points()` isn't and odd number."],["TimeDomainOperations","Defines all operations which are valid on `DataVectors` containing time domain data. # Failures All operations in this trait fail with `VectorMustBeInTimeDomain` if the vector isn't in time domain."],["VectorConvolution","Provides a convolution operation for data vectors with data vectors."],["VectorIter","Operations which allow to iterate over the vector and to derive results or to change the vector. "]],"type":[["ComplexFreqVector32","Specialization of a vector for a certain data type."],["ComplexFreqVector64","Specialization of a vector for a certain data type."],["ComplexTimeVector32","Specialization of a vector for a certain data type."],["ComplexTimeVector64","Specialization of a vector for a certain data type."],["DataVector32","Specialization of a vector for a certain data type."],["DataVector64","Specialization of a vector for a certain data type."],["RealFreqVector32","Specialization of a vector for a certain data type."],["RealFreqVector64","Specialization of a vector for a certain data type."],["RealTimeVector32","Specialization of a vector for a certain data type."],["RealTimeVector64","Specialization of a vector for a certain data type."],["VecResult","Result contains on success the vector. On failure it contains an error reason and an vector with invalid data which still can be used in order to avoid memory allocation."],["VoidResult","Void/nothing in case of success or a reason in case of an error."]]});