<template>
    <div id="Home">
        <!-- <div class="markdown-test" v-html="encodeHtml(docstringTest)"></div> -->

        <h2>Modules</h2>
        <div class="api" v-for="api of apis" :key="api[0]">
            <div class="header clickable">
                <span class="name">{{api[0]}}</span>
                <span class="desc" v-html="api[1]"></span>
            </div>
            <div class="content">
                <div class="md-docstring" v-html="encodeHtml(api[3] as string)"></div>
            </div>
        </div>

        <h2>Classes</h2>

    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import meta from '../meta.json';
import { marked } from 'marked';
import {$} from '../main';

const apis = ['AggregationMethod.md', 'all_symbols.md', 'api_report.pb', 'argsort.md', 'audio.md', 'autodiff.md', 'autograph.md', 'batch_to_space.md', 'bitcast.md', 'bitwise.md', 'boolean_mask.md', 'broadcast_dynamic_shape.md', 'broadcast_static_shape.md', 'broadcast_to.md', 'case.md', 'cast.md', 'clip_by_global_norm.md', 'clip_by_norm.md', 'clip_by_value.md', 'compat.md', 'concat.md', 'cond.md', 'config.md', 'constant.md', 'constant_initializer.md', 'control_dependencies.md', 'convert_to_tensor.md', 'CriticalSection.md', 'custom_gradient.md', 'data.md', 'debugging.md', 'device.md', 'DeviceSpec.md', 'distribute.md', 'dtypes.md', 'dynamic_partition.md', 'dynamic_stitch.md', 'edit_distance.md', 'einsum.md', 'ensure_shape.md', 'errors.md', 'estimator.md', 'executing_eagerly.md', 'expand_dims.md', 'experimental.md', 'extract_volume_patches.md', 'eye.md', 'feature_column.md', 'fill.md', 'fingerprint.md', 'foldl.md', 'foldr.md', 'function.md', 'gather.md', 'gather_nd.md', 'get_current_name_scope.md', 'get_logger.md', 'get_static_value.md', 'gradients.md', 'GradientTape.md', 'grad_pass_through.md', 'Graph.md', 'graph_util.md', 'group.md', 'guarantee_const.md', 'hessians.md', 'histogram_fixed_width.md', 'histogram_fixed_width_bins.md', 'identity.md', 'identity_n.md', 'image.md', 'IndexedSlices.md', 'IndexedSlicesSpec.md', 'init_scope.md', 'inside_function.md', 'io.md', 'is_tensor.md', 'keras.md', 'linalg.md', 'linspace.md', 'lite.md', 'load_library.md', 'load_op_library.md', 'lookup.md', 'make_ndarray.md', 'make_tensor_proto.md', 'map_fn.md', 'math.md', 'meshgrid.md', 'mlir.md', 'Module.md', 'name_scope.md', 'nest.md', 'nn.md', 'nondifferentiable_batch_function.md', 'norm.md', 'no_gradient.md', 'no_op.md', 'numpy_function.md', 'ones.md', 'ones_initializer.md', 'ones_like.md', 'one_hot.md', 'Operation.md', 'OptionalSpec.md', 'pad.md', 'parallel_stack.md', 'print.md', 'profiler.md', 'py_function.md', 'quantization.md', 'queue.md', 'ragged.md', 'RaggedTensor.md', 'RaggedTensorSpec.md', 'random.md', 'random_index_shuffle.md', 'random_normal_initializer.md', 'random_uniform_initializer.md', 'range.md', 'rank.md', 'raw_ops.md', 'realdiv.md', 'recompute_grad.md', 'RegisterGradient.md', 'register_tensor_conversion_function.md', 'repeat.md', 'required_space_to_batch_paddings.md', 'reshape.md', 'reverse.md', 'reverse_sequence.md', 'roll.md', 'saved_model.md', 'scan.md', 'scatter_nd.md', 'searchsorted.md', 'sequence_mask.md', 'sets.md', 'shape.md', 'shape_n.md', 'signal.md', 'size.md', 'slice.md', 'sort.md', 'space_to_batch.md', 'space_to_batch_nd.md', 'sparse.md', 'SparseTensorSpec.md', 'split.md', 'squeeze.md', 'stack.md', 'stop_gradient.md', 'strided_slice.md', 'strings.md', 'summary.md', 'switch_case.md', 'sysconfig.md', 'Tensor.md', 'TensorArray.md', 'TensorArraySpec.md', 'tensordot.md', 'TensorShape.md', 'TensorSpec.md', 'tensor_scatter_nd_add.md', 'tensor_scatter_nd_max.md', 'tensor_scatter_nd_min.md', 'tensor_scatter_nd_sub.md', 'tensor_scatter_nd_update.md', 'test.md', 'tile.md', 'timestamp.md', 'tpu.md', 'train.md', 'transpose.md', 'truncatediv.md', 'truncatemod.md', 'tuple.md', 'types.md', 'TypeSpec.md', 'type_spec_from_value.md', 'UnconnectedGradients.md', 'unique.md', 'unique_with_counts.md', 'unravel_index.md', 'unstack.md', 'Variable.md', 'VariableAggregation.md', 'VariableSynchronization.md', 'variable_creator_scope.md', 'vectorized_map.md', 'version.md', 'where.md', 'while_loop.md', 'xla.md', 'zeros.md', 'zeros_initializer.md', 'zeros_like.md', '_api_cache.json', '_redirects.yaml', '_toc.yaml']

@Options({components: {}})
export default class Home extends Vue
{
    mounted()
    {
        $('.api').accordion({collapsible: true, header: '.header', heightStyle: 'content',
            active: false})
    }

    encodeHtml(markdown: string): string
    {
        if (!markdown) return ""

        return marked(markdown)
    }

    get apis() {
        return meta.filter(it => it[2])
    }
}
</script>

<style lang="sass" scoped>
#Home > * + *
    margin-top: 10px

.api
    .header
        text-align: left
        background: #ececec
        padding: 10px
        border-radius: 10px

        .name
            font-weight: bold
            margin-right: 10px
            color: #2298d4
    
    .ui-state-active.header
        border-radius: 10px 10px 0 0!important

    .content
</style>

<style lang="sass">
.md-docstring
    text-align: left
    background: #f3f3f3
    padding: 10px
    border-radius: 0 0 10px 10px

    h1, h2
        font-size: 1em !important
</style>