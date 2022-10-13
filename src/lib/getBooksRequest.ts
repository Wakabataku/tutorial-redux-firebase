import axios from "axios"

export const getBooksRequest = async (value: string) => {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes"

  const params = {
    q: `intitle:${value}`, // 検索キーワード。intitle:で書籍名が対象に
    Country: "JP", // 国の指定。JPで日本の指定
    maxResults: 40, // 取得する検索件数。10~40件を指定可。デフォルトは10件
    startIndex: 0, // ページングのページ数を指定。0-index
  }

  return await axios.get(baseUrl, { params: params })
}
