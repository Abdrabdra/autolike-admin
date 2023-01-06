

export interface IComplaintsResponse
{
  complaints: IComplaint[],
    count: number
}


export interface IComplaint {
  createdAt: string,
  updateAt: string,
  id: number,
  text: string,
  status: string,
  reporter: any,
  culprit: {
    createdAt: string,
    updateAt: string,
    id: number | null,
    description: string | null,
    age: number | null,
    firstName: string | null,
    secondName: string | null,
    middleName: null | string,
    block: {id: number, text: any, block: boolean} | null,
    kids: number | null,
    date: string | null,
    iin: string | null
  }
}

