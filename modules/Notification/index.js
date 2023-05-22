import Swal from 'sweetalert2'
import Style from './index.module.css'

export const NotificationToast = Swal.mixin({
    showConfirmButton: false,
    customClass: {
      popup: `${Style.popup}`,
      title: `${Style.title}`,
    },
    showClass: {
        popup: 'swal2-noanimation',
    },
    timer: 2000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})// 