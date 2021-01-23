export default function () {
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
  console.info(context)
}
