import Register from '../../Apps/Login/Register'
import Authority from '../../Apps/Login/Authority'

const register = [
    {
        id: 'register',
        component: Register,
        icon: '',
        path: '/register',
        korean: '회원가입',
        exact: true,
    },
    {
        id: 'authority',
        component: Authority,
        icon: '',
        path: '/authority',
        korean: '권한설정',
        exact: true,
    },
]

export default register