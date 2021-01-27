import Header from '../template/Header'
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import Error404 from '../pages/Error404'

const routes = {
    '/': Header,
    '/:id': Characters,
    '/contact': 'Contact'
}

const router = async () => {
    const header = null || document.getElementById('Header')
    const content = null || document.getElementById('content')

    header.innerHTML= await Header()
}

export default router