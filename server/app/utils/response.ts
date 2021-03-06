export class ResponseSuccess {
  $data: { message: string; content: any[] }

  constructor(message: string, response: any[]) {
    this.$data = { message, content: response }
  }
}

export class ErrorResponse {
  $error: { message: string }
  constructor(message: string) {
    this.$error = { message }
  }
}
