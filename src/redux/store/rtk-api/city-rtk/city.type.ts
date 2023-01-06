

export interface IManagementResponse {
  id: number,
  value?: string
  title?: string
}


export interface ICreateManagementBody {
  genderId?:number
  value: string
}