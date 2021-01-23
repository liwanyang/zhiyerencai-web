// 权限校验
const ignores = ['index', 'index-apply-funding', 'index-sign-up', 'index-sign-in']

const auth = ({ store, route, redirect }) => {
  // store.commit('MONITORROUTER', route.name)
  if (!ignores.includes(route.name)) {
    const token = store.state.access_token
    if (!token) {
      // console.error('en', token);
      // redirect({name: 'index-sign-in'})
    }
  }
}
export default auth
