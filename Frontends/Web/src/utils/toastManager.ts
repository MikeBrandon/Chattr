import { toast } from '@zerodevx/svelte-toast';

export const successToast = (m: string) => toast.push(m, {
  theme: {
    '--toastBackground': '#7EC832',
    '--toastColor': 'white',
    '--toastBarBackground': 'white'
  }
})

export const warningToast = (m: string) => toast.push(m, { theme: {
    '--toastBackground': 'orange',
    '--toastColor': 'white',
    '--toastBarBackground': 'white'
} })

export const failureToast = (m: string) => toast.push(m, { theme: {
    '--toastBackground': '#E84E38',
    '--toastColor': 'white',
    '--toastBarBackground': 'white'
} })

export const normalToast = (m: string) => toast.push(m, { theme: {
    '--toastBackground': '#FF914D',
    '--toastColor': '#000000',
    '--toastBarBackground': '#000000'
} })