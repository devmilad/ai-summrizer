import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const rapidapiKey= import.meta.env.VITE_RAPID_API_ARTICLE_KEY


export const articleApi=createApi({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
        prepareHeaders:(header)=>{
            header.set('X-RapidAPI-Key',rapidapiKey)
            header.set('X-RapidAPI-HOST','article-extractor-and-summarizer.p.rapidapi.com')

            return header
        }
    }),
    endpoints: (builder)=>({
        getSummary: builder.query({
            query:(prams)=>`/summarize?url=${encodeURIComponent(prams.articleUrl)}&length=3`
        })
    })

})

export const {useLazyGetSummaryQuery} = articleApi