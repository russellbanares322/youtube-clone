type ToastTypes = "success" | "error" | "warning" | "info"

export type ToastProps = {
    open: boolean,
    closable: boolean,
    title: string,
    description: string
    type: ToastTypes
}