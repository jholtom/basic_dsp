initSidebarItems({"enum":[["DataVectorDomain","The domain of a data vector"],["ErrorReason","Enumeration of all error reasons"],["PaddingOption","An option which defines how a vector should be padded"]],"struct":[["Statistics","Statistics about the data in a vector"]],"trait":[["ComplexVectorOperations","Defines all operations which are valid on `DataVectors` containing complex data. # Failures All operations in this trait fail with `VectorMustBeComplex` if the vector isn't in the complex number space."],["DataVector","DataVector gives access to the basic properties of all data vectors"],["GenericVectorOperations","Defines all operations which are valid on all `DataVectors`."],["Offset","An operation which adds a constant to each vector element"],["RealVectorOperations","Defines all operations which are valid on `DataVectors` containing real data. # Failures All operations in this trait fail with `VectorMustBeReal` if the vector isn't in the real number space."],["RededicateVector","This trait allows to change a vector type. The operations will convert a vector to a different type and set `self.len()` to zero. However `self.allocated_len()` will remain unchanged. The use case for this is to allow to reuse the memory of a vector for different operations."],["Scale","An operation which multiplies each vector element with a constant"]],"type":[["VecResult","Result contains on success the vector. On failure it contains an error reason and an vector with invalid data which still can be used in order to avoid memory allocation."],["VoidResult","Void/nothing in case of success or a reason in case of an error."]]});