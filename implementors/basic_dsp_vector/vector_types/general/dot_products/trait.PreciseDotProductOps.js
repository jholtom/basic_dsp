(function() {var implementors = {};
implementors["basic_dsp_matrix"] = ["impl&lt;S:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/requirements/trait.ToSlice.html\" title=\"trait basic_dsp_vector::vector_types::requirements::ToSlice\">ToSlice</a>&lt;T&gt;, V:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/vec_impl_and_indexers/trait.Vector.html\" title=\"trait basic_dsp_vector::vector_types::vec_impl_and_indexers::Vector\">Vector</a>&lt;T&gt;, T:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/trait.RealNumber.html\" title=\"trait basic_dsp_vector::RealNumber\">RealNumber</a>&gt; <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, <a class=\"struct\" href=\"basic_dsp_matrix/struct.MatrixMxN.html\" title=\"struct basic_dsp_matrix::MatrixMxN\">MatrixMxN</a>&lt;V, S, T&gt;&gt; for <a class=\"struct\" href=\"basic_dsp_matrix/struct.MatrixMxN.html\" title=\"struct basic_dsp_matrix::MatrixMxN\">MatrixMxN</a>&lt;V, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V, Output = <a class=\"type\" href=\"basic_dsp_vector/vector_types/type.ScalarResult.html\" title=\"type basic_dsp_vector::vector_types::ScalarResult\">ScalarResult</a>&lt;T&gt;&gt;,&nbsp;</span>","impl&lt;S:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/requirements/trait.ToSlice.html\" title=\"trait basic_dsp_vector::vector_types::requirements::ToSlice\">ToSlice</a>&lt;T&gt;, V:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/vec_impl_and_indexers/trait.Vector.html\" title=\"trait basic_dsp_vector::vector_types::vec_impl_and_indexers::Vector\">Vector</a>&lt;T&gt;, T:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/trait.RealNumber.html\" title=\"trait basic_dsp_vector::RealNumber\">RealNumber</a>&gt; <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix2xN.html\" title=\"struct basic_dsp_matrix::Matrix2xN\">Matrix2xN</a>&lt;V, S, T&gt;&gt; for <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix2xN.html\" title=\"struct basic_dsp_matrix::Matrix2xN\">Matrix2xN</a>&lt;V, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V, Output = <a class=\"type\" href=\"basic_dsp_vector/vector_types/type.ScalarResult.html\" title=\"type basic_dsp_vector::vector_types::ScalarResult\">ScalarResult</a>&lt;T&gt;&gt;,&nbsp;</span>","impl&lt;S:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/requirements/trait.ToSlice.html\" title=\"trait basic_dsp_vector::vector_types::requirements::ToSlice\">ToSlice</a>&lt;T&gt;, V:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/vec_impl_and_indexers/trait.Vector.html\" title=\"trait basic_dsp_vector::vector_types::vec_impl_and_indexers::Vector\">Vector</a>&lt;T&gt;, T:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/trait.RealNumber.html\" title=\"trait basic_dsp_vector::RealNumber\">RealNumber</a>&gt; <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix3xN.html\" title=\"struct basic_dsp_matrix::Matrix3xN\">Matrix3xN</a>&lt;V, S, T&gt;&gt; for <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix3xN.html\" title=\"struct basic_dsp_matrix::Matrix3xN\">Matrix3xN</a>&lt;V, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V, Output = <a class=\"type\" href=\"basic_dsp_vector/vector_types/type.ScalarResult.html\" title=\"type basic_dsp_vector::vector_types::ScalarResult\">ScalarResult</a>&lt;T&gt;&gt;,&nbsp;</span>","impl&lt;S:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/requirements/trait.ToSlice.html\" title=\"trait basic_dsp_vector::vector_types::requirements::ToSlice\">ToSlice</a>&lt;T&gt;, V:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/vec_impl_and_indexers/trait.Vector.html\" title=\"trait basic_dsp_vector::vector_types::vec_impl_and_indexers::Vector\">Vector</a>&lt;T&gt;, T:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/trait.RealNumber.html\" title=\"trait basic_dsp_vector::RealNumber\">RealNumber</a>&gt; <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix4xN.html\" title=\"struct basic_dsp_matrix::Matrix4xN\">Matrix4xN</a>&lt;V, S, T&gt;&gt; for <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix4xN.html\" title=\"struct basic_dsp_matrix::Matrix4xN\">Matrix4xN</a>&lt;V, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V, Output = <a class=\"type\" href=\"basic_dsp_vector/vector_types/type.ScalarResult.html\" title=\"type basic_dsp_vector::vector_types::ScalarResult\">ScalarResult</a>&lt;T&gt;&gt;,&nbsp;</span>","impl&lt;S:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/requirements/trait.ToSlice.html\" title=\"trait basic_dsp_vector::vector_types::requirements::ToSlice\">ToSlice</a>&lt;T&gt;, V:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/vec_impl_and_indexers/trait.Vector.html\" title=\"trait basic_dsp_vector::vector_types::vec_impl_and_indexers::Vector\">Vector</a>&lt;T&gt;, T:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/trait.RealNumber.html\" title=\"trait basic_dsp_vector::RealNumber\">RealNumber</a>&gt; <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V&gt; for <a class=\"struct\" href=\"basic_dsp_matrix/struct.MatrixMxN.html\" title=\"struct basic_dsp_matrix::MatrixMxN\">MatrixMxN</a>&lt;V, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V, Output = <a class=\"type\" href=\"basic_dsp_vector/vector_types/type.ScalarResult.html\" title=\"type basic_dsp_vector::vector_types::ScalarResult\">ScalarResult</a>&lt;T&gt;&gt;,&nbsp;</span>","impl&lt;S:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/requirements/trait.ToSlice.html\" title=\"trait basic_dsp_vector::vector_types::requirements::ToSlice\">ToSlice</a>&lt;T&gt;, V:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/vec_impl_and_indexers/trait.Vector.html\" title=\"trait basic_dsp_vector::vector_types::vec_impl_and_indexers::Vector\">Vector</a>&lt;T&gt;, T:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/trait.RealNumber.html\" title=\"trait basic_dsp_vector::RealNumber\">RealNumber</a>&gt; <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V&gt; for <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix2xN.html\" title=\"struct basic_dsp_matrix::Matrix2xN\">Matrix2xN</a>&lt;V, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V, Output = <a class=\"type\" href=\"basic_dsp_vector/vector_types/type.ScalarResult.html\" title=\"type basic_dsp_vector::vector_types::ScalarResult\">ScalarResult</a>&lt;T&gt;&gt;,&nbsp;</span>","impl&lt;S:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/requirements/trait.ToSlice.html\" title=\"trait basic_dsp_vector::vector_types::requirements::ToSlice\">ToSlice</a>&lt;T&gt;, V:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/vec_impl_and_indexers/trait.Vector.html\" title=\"trait basic_dsp_vector::vector_types::vec_impl_and_indexers::Vector\">Vector</a>&lt;T&gt;, T:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/trait.RealNumber.html\" title=\"trait basic_dsp_vector::RealNumber\">RealNumber</a>&gt; <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V&gt; for <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix3xN.html\" title=\"struct basic_dsp_matrix::Matrix3xN\">Matrix3xN</a>&lt;V, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V, Output = <a class=\"type\" href=\"basic_dsp_vector/vector_types/type.ScalarResult.html\" title=\"type basic_dsp_vector::vector_types::ScalarResult\">ScalarResult</a>&lt;T&gt;&gt;,&nbsp;</span>","impl&lt;S:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/requirements/trait.ToSlice.html\" title=\"trait basic_dsp_vector::vector_types::requirements::ToSlice\">ToSlice</a>&lt;T&gt;, V:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/vector_types/vec_impl_and_indexers/trait.Vector.html\" title=\"trait basic_dsp_vector::vector_types::vec_impl_and_indexers::Vector\">Vector</a>&lt;T&gt;, T:&nbsp;<a class=\"trait\" href=\"basic_dsp_vector/trait.RealNumber.html\" title=\"trait basic_dsp_vector::RealNumber\">RealNumber</a>&gt; <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V&gt; for <a class=\"struct\" href=\"basic_dsp_matrix/struct.Matrix4xN.html\" title=\"struct basic_dsp_matrix::Matrix4xN\">Matrix4xN</a>&lt;V, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"basic_dsp_vector/vector_types/general/dot_products/trait.PreciseDotProductOps.html\" title=\"trait basic_dsp_vector::vector_types::general::dot_products::PreciseDotProductOps\">PreciseDotProductOps</a>&lt;T, V, Output = <a class=\"type\" href=\"basic_dsp_vector/vector_types/type.ScalarResult.html\" title=\"type basic_dsp_vector::vector_types::ScalarResult\">ScalarResult</a>&lt;T&gt;&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
