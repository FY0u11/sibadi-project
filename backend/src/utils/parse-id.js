module.exports = controller => async (ctx, next) => {
  ctx.parsed =
    Number.isNaN(+ctx.params.id) || ctx.params.id.length > 6
      ? { id: null }
      : { id: Math.abs(ctx.params.id) }
  await controller(ctx, next)
}
