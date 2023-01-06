export interface IHadithCategoryResponse {
  id: number,
  title: string
}
export interface ICreateHadithCategory {
  title: string
}
export interface IOneHadithResponse {
  id: number,
  title: string,
  arabic: string,
  translate: string,
  description: string
}
export interface ICreateHadith {
  id?:number
  title?: string,
  arabic?: string,
  translate?: string,
  description?: string
}
export interface IHadithesListResponse {
  id: number,
  title: string
}
