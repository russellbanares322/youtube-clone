import { TChildren } from "@/types/types";

export type DialogProps = {
    open: boolean,
    handleClose: () => void,
} & TChildren