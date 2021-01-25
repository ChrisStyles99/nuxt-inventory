export default function ({ redirect }) {
  if (process.client) {
    if (window.document.cookie.includes('isLoggedIn=true')) {
      redirect('/')
    }
  }
}
