import { ReactNode } from 'react'

export class FileItem {
  status: FileItemStatus = 'ready'

  message = '准备中..'

  uid: string = new Date().getTime().toString()

  name?: string

  url?: string

  type?: string

  path?: string

  percentage?: string | number = 0

  formData?: FormData = {} as FormData

  responseText?: string

  loadingIcon?: ReactNode

  failIcon?: ReactNode

  memo?: string
}

export type FileItemStatus =
  | 'ready'
  | 'uploading'
  | 'success'
  | 'error'
  | 'removed'

export type FileType<T> = { [key: string]: T }
