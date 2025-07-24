// Movie data structure
const movies = [
    {
        id: 1,
        title: "Thunderbolts",
        releaseDate: "May 2, 2025",
        imdbRating: 6.8,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSMsh99SOrbiEbCvdcTEbEF25WO8_xrAYryo70AHQkwq7ihM56gPrILGZBjOG2bsLulfJERyD2Py762Fd0xjGH5icvQjqLZ_15HGXon7fCTNgbxk1ErwcNo_lE9JqZIPS3nO0PjqdMHo2Vlp_iERGB-CQE0I6L0VJdjTuOVBU1iGIbtcZxApdlP-O2Bg/s1600/1.png",
        categories: ["Featured", "Action", "Superhero"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.5GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.2GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.2GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.56GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 2,
        title: "Sinners",
        releaseDate: "March 14, 2025",
        imdbRating: 7.2,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjv-9WnGKToJGLueKUhJC11GuC203qLcQnF73naHbq5V0dRrxD9W8UrVU6ZmZVsGrKzZ2lt7mWeaLwNLxTep86gj246kj_7BRViA-A94msCKQxXVqClByeK5cmt1ls8vLsOGQyy60YIK9HDyOG1ibKpVDguhwgqT1nrzXBB87CAntOapndMfWL1-ibhNg/s1600/2.png",
        categories: ["Featured", "Action", "Thriller"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.1GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.4GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.2GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.3GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.60GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 3,
        title: "Havoc",
        releaseDate: "April 18, 2025",
        imdbRating: 6.5,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU1JfSqb4YhEjL1RuaIZVxGr6NhRJqP2wztPrp_fZT6T5Bfl3lL8-Ho4TmOx6xrgcMEJveq0qLrQoume5EutHdLYreVeyJaUWxfpfWElOURD9M6yG6LC82DNyM_6y1OZ0FSb6EIvl3m_3Y8EsBch1cER8EDnQ43i5XO6FoeGjP_uC8WH_nxtO-hX2BZw/s1600/3.png",
        categories: ["Action", "Crime"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.0GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.0GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.0GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.1GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.55GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 4,
        title: "Another Simple Favor",
        releaseDate: "February 9, 2025",
        imdbRating: 6.3,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTSqyfAktZQs5txxBU3nTtaZQkyBMUNWyQ_QX7RiLf1UWOKAflkmxjtg4Q_IT8DpckXcwGivKQA8phR00_y-S7hdZnjuyE4MPOiMfK-iz69yzqq2nRB6E_KJtdZg-E2K-Gnx3oa-QXuHfrUP3artYSzqKauNo27hVfU4fmR5T3toVT7XWcCtNoUQoLbA/s1600/4.png",
        categories: ["Comedy", "Crime"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "11.8GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "3.8GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "1.9GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.0GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.50GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 5,
        title: "The Accountant 2",
        releaseDate: "March 28, 2025",
        imdbRating: 6.7,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMRzpjGF2sRyb5Sw15butWpGRGm9kMU4QM2aHR424HVm-Atb14w484iQsUzlKlwLRwP4WzOu6gWSr7380PXxIa74Upbv-h6lAdZQH2aFKEm3kwOHsWh-OaV5SmicLRVA6DYg2ctUhKMHeijIsZ-1Dik9ZnZleehyphenhyphenpCuFhrZLPG3wuFTj_o-bZIF4zxzQ/s1600/5.png",
        categories: ["Featured", "Action", "Thriller"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.2GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.3GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.3GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.2GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.60GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 6,
        title: "Conclave",
        releaseDate: "January 24, 2025",
        imdbRating: 6.4,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNYzhd3kGzt7Bii0pFGgj7TpYrSIrAjU_JiM5YEVs1bx4-nFbdCdaivw28abVTZPenVDwVd8lnxBV8in5NOwQ7Zd2nT90wzQoT9uuyPOg5hFGrqOJJkOYOzXd-q-MjMvHgXrdd7846_AuLKhs5Lc7CLRrpVQNqI4W1D1pZFlgz0ZgV-jKjBijtgZK-Qw/s1600/6.png",
        categories: ["Drama", "Mystery"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "11.5GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "3.7GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "1.8GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "0.9GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.48GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 7,
        title: "Exterritorial",
        releaseDate: "April 4, 2025",
        imdbRating: 6.1,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCVzxcVRYeXl1kzZE83PaYL939vHtTCpNXr7lZGGozXptbpQiWdohYy8qLL4ZPUt4ZMZTB9jt58c9GpMhsP9FVN5novRcSGGYpw8_nqqRovKPMmKSWXvxT04LVvwfYuctHAqFCTcWMflZZrP0WdXD7VPsQj8zKD7IGo0sNTR0jicocvVD7rawRcDxLqw/s1600/7.png",
        categories: ["Featured", "Sci-Fi", "Thriller"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.7GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.1GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.53GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 8,
        title: "Now You See Me: Now You Don't",
        releaseDate: "May 16, 2025",
        imdbRating: 6.6,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg3tVuwlRYg0KPyXLp-QgZgAuIVUr3pJlibn-NAxkVMV4cYjpjgcJs7ylRJwz5ebPcmLpor1v7gmQByJw4lKHV_wGJUGgX3ZqgQz62yQaX5isRKOWnvSmKzZnR8ccWh3tfIp7pClpr9Xwhuh6h3M3IdtdMFhFQ-pnr3k-iHz9ARvYIZdKW8QtnfLFG2g/s1600/8",
        categories: ["Crime", "Mystery"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.0GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.5GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.3GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.3GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.60GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 9,
        title: "Companion",
        releaseDate: "March 7, 2025",
        imdbRating: 6.8,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX4LaWTecK0BSehd67U2Fo1UJeK5aCmP3rRafrZixk0-sbECahmVz0bLx2ve-_rfG8G0uq7CJzyJ_0t4mXq1aF4QYFrx3BY7EGHasKYYwisuddcwSZ-Wv5GhaHx50M4ksvNBiQNVpPMrlmiDMPAedrHx2geFizccGK5_6eLl92qQxhPovGPIO4WXG1jQ/s1600/9.png",
        categories: ["Featured", "Drama", "Romance"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "11.9GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "3.9GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "1.9GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.0GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.52GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 10,
        title: "Black Bag",
        releaseDate: "February 23, 2025",
        imdbRating: 6.5,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyLzXlDa3WwJKK1njX0VVxlE6QSLGV5POU-g0-hqH25i7n8R8oHTW2RNnAsjeJGLTDu6mH2EldTUm71cwvwQwUv96STKsYNoRlPZgqDJCFD0oLMMX5sorEKsS-v5RS5DB1xO8DhyFNDJwg2feUSyj9CWb_gti6Hhe0aARkTuSpXZoA0tJL5prRFmtpUw/s1600/10.png",
        categories: ["Thriller", "Action"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.3GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.2GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.55GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 11,
        title: "3 Idiots",
        releaseDate: "December 25, 2009",
        imdbRating: 8.4,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnyg_mrR5jsc3ULkVXwQFGtuqSJKIgN0ekWvJIL56bot9IURYx8pQVn7jBK03zNRvRQGLyoZVZosNazbKUSPNZCbHji7lag7lZdeY4fuCyfO7L489P-oYKInFqdzhQJQUw8H8byU8AU7FQrPspvnlaV0y3BeIeBfuZIRBVuHEKzCv69OBzpczAraLuDA/s1600/1.png",
        categories: ["Featured", "Comedy", "Drama"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.8GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.5GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.3GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.4GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.68GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 12,
        title: "Dangal",
        releaseDate: "December 21, 2016",
        imdbRating: 8.3,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikJXMf-HzHlu_PnkU5yVZc9z4dp5tPRJVYHFwmO5sGp6TB46KMfWZMO0SRvhyphenhyphenEPC09snEpjttl-X_wZRxjFoViedUeqgZX0i82jKkLvTH7RS2yNGF-RLFROsoli5Aq2kbIfhwgH8LLhpw_9qrxRvXn2cHbU-qw43LAN09FwteP2HKo8-SDNzMaNXVMzQ/s1600/2.png",
        categories: ["Biography", "Sports"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.2GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.7GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.5GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.6GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.72GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 13,
        title: "Taare Zameen Par",
        releaseDate: "December 21, 2007",
        imdbRating: 8.3,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBVdQHBVeIKhsqEsGpN08iHBXSzkbFgxowvDK46f94f7WUeBrvFlUXeXKsAQyEuE1a09QMwaiyNeR-KlBwgeC67E6LMhYr24SzPe_5S6o-dzNkeDJcC_tk8Pqi1EMpj9RYZ5dWPzSQB6bibFx0DkEd1tP3Kh-_MXa06thHYflp814zcW6qMbhZ_36Kjg/s1600/3.png",
        categories: ["Featured", "Drama", "Family"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "11.9GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.0GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.1GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.55GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 14,
        title: "Gully Boy",
        releaseDate: "February 14, 2019",
        imdbRating: 7.9,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ_706kfl-VYuhmd1VKQJjY4DcJrdVCHv-LM-1DUXoUERw-fw7j23Qy8QUCbt7H1wpMpUj3WolH6BXCusY7RihmQ210wTc2NJNYvlwPGjxT9dW2Bc0Ljce3BK_ONk_vLaRpVE_anDIHxYjRd-ba7F9A0c28c2Vl9R1yw9qrfxAbveZI9VcnyUT5fFqXg/s1600/4.png",
        categories: ["Music", "Drama"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.3GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.3GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.2GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.3GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.62GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 15,
        title: "Shershaah",
        releaseDate: "August 12, 2021",
        imdbRating: 8.4,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6WbXwkpSTiHrwdVw6IejX6KhDNTx6sW0fBpkDcwhw5QJhUNEEM1ZQUq__phC98NO5tng_SaGCziPrKKmiUYp9ZH-G2q3pRbx7NiZwU_JUJi5YTVhfeUnKNzIcg1G0qu25AB3sUPuGc8q3Ox7ZzbT1yECdQzu9GMe53pbeKjTTYi7SaT-8ZJfCeFZjYw/s1600/5.png",
        categories: ["Biography", "War"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.5GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.8GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.6GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.7GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.75GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 16,
        title: "Drishyam (2015)",
        releaseDate: "July 31, 2015",
        imdbRating: 8.2,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbocgSTDFOOMs4e11pPgAXGahdM5jgLtui7m3WGckfdCH_53nlj99XwFmN96B2JoYmINNIzK3HKJn2DKEgUrriqyCFdKvVJOeuB7jWryc8fDjYBY4hVL8NyW2VvC-5s-prXJOWXxsk5RcrowZrhsv7yeRbKLjZtZBJV9acenoHSuWc7m4JUyVNqs5v0w/s1600/6.png",
        categories: ["Thriller", "Mystery"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.1GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.0GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.0GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.1GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.58GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 17,
        title: "Barfi!",
        releaseDate: "September 14, 2012",
        imdbRating: 8.1,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOEq2AFCdDQ1IORXkEJEObZhbE2MjCteCgTA5ruS-fi_URMUr-mwcy1RFklP6tQf_VzTmsKhMAp1Ypn5KmvkTRavYPQDxzgzY1MRFPsFfJe5RA1HOdM0K4UJCbBEfMtavF4Qg7CnCZ4gWBqkm7Ujo-RtqQCcgPDibJhljPb6EbkbPtgLkhqCJJifCdTw/s1600/7.png",
        categories: ["Romance", "Comedy"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "11.8GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "3.9GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "1.9GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.0GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.52GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 18,
        title: "Chak De! India",
        releaseDate: "August 10, 2007",
        imdbRating: 8.2,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLwKSyfaKABP6a47mZVJ1yoaIgYzQDJAYjh_oP32jrjiBvH6bZ4GQS45Gi84JtWnyNLT3EjtBUc7hUaihUlaB2spspv40GkStZXgEjOn9vGOyCko82fvB-e4dqnA_LfiAqAV1snMTvAGo3phgdbvWRG02faEbWPnQbwWnZlD6TxrPCq86xsFE3adesbg/s1600/8.png",
        categories: ["Sports", "Drama"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.0GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.2GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.60GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 19,
        title: "Andhadhun",
        releaseDate: "October 5, 2018",
        imdbRating: 8.2,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZrEUud9U6TlT4Sz0SzwUMCc7W11lFWliFgSLrX__pUZsyb1VDLBFIM3G31WFOwobanUzaSBZEpnCbV_OTLcPhYTInO__7rXGpmcHnp82tU9mBYOTz0Oehj2bF5wN-lRoBpwmr3CX8fyOBMLNHU_kZyWWgBzWiTxrtx21ZM3VS-Bn90huDhAmivfrAtg/s1600/9.png",
        categories: ["Thriller", "Black Comedy"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.4GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.2GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.2GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.3GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.65GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 20,
        title: "Swades",
        releaseDate: "December 17, 2004",
        imdbRating: 8.2,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/4EVOz7zOgYV8dPjQikKFZMQqxg/s1600/10.png",
        categories: ["Drama"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "11.7GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "3.8GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "1.8GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "0.9GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.50GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 21,
        title: "Pather Panchali",
        releaseDate: "August 26, 1955",
        imdbRating: 8.5,
        bannerLink: "",
        categories: ["Drama"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "10.5GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "3.5GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "1.7GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "0.8GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.45GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 22,
        title: "Monpura",
        releaseDate: "January 30, 2009",
        imdbRating: 8.3,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7H8_-qevZgI85Ovn5mZaJPxw3dq2hNdNCpnImOG_l9h9uV4cZUJviAIlsMpHgGKN3aLutL-7f3I2CA4Wx-8jIkasL8frfjZPhlV5qXCJkm6u1hRu-QjamjYG1uk_UuKVA7NVZA5p_PuQP9K1_wZzlUFAeQ1ifoYz1GF9HV9IjrF6dnOWT3d3KdWJcYg/s1600/2.png",
        categories: ["Romance", "Drama"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "11.2GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "3.7GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "1.9GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.0GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.55GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 23,
        title: "Television",
        releaseDate: "November 8, 2013",
        imdbRating: 8.2,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_81Pivg-Dmx8oecFb3DpfU3Q7hQoCtAX3xf8U7MqTxK_ANbs2YGc8Yg2t5IWLwclNvBYN2l4Q6MlrAn3jdQyCewDYg_-aVFy9etHPvQ39sQw-rTDUJAh4JXQGrU1jXt99Y65psWP9Zd4ASh1AV1H0YvSJssavybuxhgjY487Nsc-EHLi8juua_WNuog/s1600/3.png",
        categories: ["Satire", "Drama"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "11.0GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "3.6GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "1.8GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "0.9GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.52GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 24,
        title: "Spirited Away",
        releaseDate: "July 20, 2001",
        imdbRating: 8.6,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiP5RquF_fTfQV-6CJIpKvIG53yeroXxLJbKFNGfTjfU8fmUss2Hdl_ms1MabxKN6jpLDImfO-TVKCxhUDzNmZCPeLsahsRpew8tvXu6zigdhkIebcjcnxO_zqd8sWP9bIiCtQHRHqcCVizYYdLxyJRL5k8EitX8kX8smeLnf5EM13sJ-vdeFWejMoKg/s1600/01",
        categories: ["Fantasy", "Adventure"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.8GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "5.2GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.8GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.9GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.82GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 25,
        title: "Coco",
        releaseDate: "November 22, 2017",
        imdbRating: 8.4,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfY6F2TzgTPBa0i3sYEDvxU-wNJnmr_yqOieRbA91pt114thlk-SuAfQ1hXjHaQCNztjQ-2NnNHU1X96yOB33wS-RReFCGfH-MzB0mhYMssxo4fkmmPaclN3dZWljRebzX4t7tdmsJuPxqmS9nXhFZEAgOpZbbZtkdg6a31PBLJ3NxJpplEj4qwVbsBQ/s1600/02",
        categories: ["Family", "Music"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "14.2GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "5.5GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "3.0GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "2.1GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.88GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 26,
        title: "Up",
        releaseDate: "May 29, 2009",
        imdbRating: 8.3,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ0PFz1DYjQzjlrzzpHBRcuYm9QbZVunOnYrFU_KWog8tPq7NTqD5Bd6CvQkKSc5WLEKFnO_DPYWe-43X5Y3Dq7On7McsvPpvOal-C7dIDLyTCYNWC_8s7jQgXW3QyEJpN2dAp6MxpK9ezE1xk155Dwr9tyjZTUt6tLe4mHhOcKyI36LdMiz8aObccgA/s1600/03.jpg",
        categories: ["Adventure", "Comedy"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.5GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "5.0GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.7GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.8GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.78GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 27,
        title: "Inside Out",
        releaseDate: "June 19, 2015",
        imdbRating: 8.1,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ_y41rNyDnvF-uasglQG8VBLWCwaRiokcYgWeFLHd9X58Amm2y1KNcAB5wzgXGXX4pAVUvghc4hT0qad6Xw6zek60d1S_TVtqWMe_usZzD3yGyzBA2I-kgpZXmo6H7Ay9aGqnIzBBojqFUqv_FI8qZ8UFhHL8ZX9Jpw_6e6uWX8BlvvtdQ8_MZJEyMA/s1600/04.jpg",
        categories: ["Family", "Drama"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.2GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.8GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.5GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.7GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.75GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 28,
        title: "Zootopia",
        releaseDate: "March 4, 2016",
        imdbRating: 8.0,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPuPQ2Yc2H_4V-3Ss7XyfDx-ttG8S-H43dzZOSpgQUc6dIw-6xjksueKolLG0Y_9aF8zmI8o_p7_Q3ip2JHr-IWkdnbEw5qItEkTFXByt4m-On9e0tbd3SWqBO5zXJVv9WOLgOrb_X5JoJxK2SF-IcfM0O4Xy69e7ssGXazM9FJc1D-jkprUdD6COkvQ/s1600/05.jpg",
        categories: ["Mystery", "Comedy"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.0GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.6GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.4GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.6GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.72GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 29,
        title: "Toy Story 3",
        releaseDate: "June 18, 2010",
        imdbRating: 8.3,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9hW3KIRnQQGaqa1zCWgkK75_JE8OrBHn4FIHjlMHwtrc1DjZjZTuy_QAp7I5E5JtlQSoxCG6eDFJSeeSSGCfbQs5IDxx_bu5AYV94p3ijUXZOU0fHbZ-rEk3wOgTtVVLcmOzUadwNG67FMNN9eXMb5dbApE_yBgLVhupDkQNPJyuJB3_Ysgkl__IrJg/s1600/06.jpg",
        categories: ["Adventure", "Family"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.7GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "5.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.9GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "2.0GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.85GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 30,
        title: "The Lion King (1994)",
        releaseDate: "June 24, 1994",
        imdbRating: 8.5,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzMVWLVLLFS2BOkUnatye-c5L4VNNyC_RqkPBC7FiU0Ds88dBFe3Y_U0kvBxvQxP1VcbSJHCBEgw9W3LBc43uwbdt9fzwbwpN6-bt1mIfNgvYEaUZOuDop9X6Z2TLIjR6BtCGTZFdGZVZ3ATWMMSqvi3hOhNbO-VR98KuAsq5pjdrZVpxj60srmhCag/s1600/07.jpg",
        categories: ["Drama", "Adventure"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "14.0GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "5.3GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "3.1GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "2.2GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.90GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 31,
        title: "How to Train Your Dragon",
        releaseDate: "March 26, 2010",
        imdbRating: 8.1,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSL4dvqlYdNXU6cHx-q6rWTWnUiZbGIWUqoQn3u_gOiiu19pjKZm3-oWy0q4sq7wWjjMgFB8Yc4nc8Z6GRBF5dS8L142ND9lWj4CDLIf2OmeNjjyluhyphenhyphenQmkFFCrN0QFbuF0gS89gVL1Chitr-xXvzSLfbhbTxe2klbgyLpw74ton-x8-0wg6jUg37zJQ/s1600/08.jpg",
        categories: ["Action", "Fantasy"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.3GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.9GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.6GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.8GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.80GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 32,
        title: "Ratatouille",
        releaseDate: "June 29, 2007",
        imdbRating: 8.1,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWO9PtlWbPak219C2_aKqnOAonbucdt2xwB1RRQyM0XhzuoDWQ6zzkZUYb-cMGkrs13uGcB2f2GvoWTA8AmcJ6e-Lnz32Jfh2KRcOH2WD26fx43PXP8EpoZGCof2OrGtOOEoTXsvGr3euvOtBWhSTeH6fG5xA0x6mjm_o9-DNGjWNERDpLe8BvnfJQ2Q/s1600/09.jpg",
        categories: ["Comedy", "Family"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "12.9GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.5GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.3GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.5GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.70GB",
                downloadLink: "#"
            }
        ]
    },
    {
        id: 33,
        title: "Finding Nemo",
        releaseDate: "May 30, 2003",
        imdbRating: 8.2,
        bannerLink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSpS7SVzv-GTF7Oa1RQV-TOSGvwKt2Ue2mQm7u2RbH6Y_6eo0T0_07XjZDAsrGiU0Q3qkOmiNAyx_VBXHYnJV2GgtJ8vaRjevWraLLSv6PSKz9UIK-Q2eXKIpauqahO0gTWiKK-hNpmLHiWqmJvcxtP-6yyWJzDieuNk-kqK-Wkc5oxvO",
        categories: ["Adventure", "Animation"],
        downloadOptions: [
            {
                quality: "4K 2160p",
                size: "13.4GB",
                downloadLink: "#"
            },
            {
                quality: "Full HD 1080p",
                size: "4.7GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p",
                size: "2.5GB",
                downloadLink: "#"
            },
            {
                quality: "HD 720p HEVC",
                size: "1.6GB",
                downloadLink: "#"
            },
            {
                quality: "SD 480p",
                size: "0.75GB",
                downloadLink: "#"
            }
        ]
    }
];

// Function to render movie posts in grid
function renderMovieGrid(movies, containerId, category = null, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let filteredMovies = category 
        ? movies.filter(movie => movie.categories.includes(category))
        : movies;
    if (limit) filteredMovies = filteredMovies.slice(0, limit);

    container.innerHTML = filteredMovies.map(movie => `
        <a class="movie-card" data-movie-id="${movie.id}" href="movie.html?id=${movie.id}">
            <div class="movie-image">
                <img src="${movie.bannerLink}" alt="${movie.title}">
                <span class="movie-category">${movie.categories[0]}</span>
            </div>
            <div class="movie-info">
                <div class="movie-rating">
                    <i class="fas fa-star"></i>
                    <span>${movie.imdbRating}</span>
                </div>
                <h3 class="movie-title">
                    <i class="fas fa-film"></i>
                    ${movie.title}
                </h3>
                <div class="movie-release-date">${movie.releaseDate}</div>
            </div>
        </a>
    `).join('');

    // Remove popup click event (handled by link now)
}

// Function to show movie popup
function showMoviePopup(movieId) {
    const movie = movies.find(m => m.id === parseInt(movieId));
    if (!movie) return;

    // Remove any existing popup
    const oldPopup = document.querySelector('.movie-popup');
    if (oldPopup) oldPopup.remove();

    // Get similar movies (max 5, sharing at least one category, not the current movie)
    const similarMovies = getSimilarMovies(movie);

    const popup = document.createElement('div');
    popup.className = 'movie-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <button class="close-popup">&times;</button>
            </div>
            <div class="popup-body">
                <div class="popup-image">
                    <img src="${movie.bannerLink}" alt="${movie.title}">
                </div>
                <div class="popup-details">
                    <h2>${movie.title}</h2>
                    <div class="popup-categories">
                        ${movie.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                    </div>
                    <div class="popup-rating">
                        ${generateStarRating(movie.imdbRating)}
                        <span class="rating-value">${movie.imdbRating}</span>
                    </div>
                    <hr class="popup-divider">
                    <div class="download-section">
                        <h3>Download Options</h3>
                        <table class="download-table">
                            <tr >
                                <th class= "download-table-l">Quality</th>
                                <th class= "download-table-m">Size</th>
                                <th class= "download-table-r">Download</th>
                            </tr>
                            ${["4K 2160p", "Full HD 1080p", "HD 720p", "HD 720p HEVC", "SD 480p"].map(quality => {
    // Find the option for this quality
    const option = movie.downloadOptions.find(opt => opt.quality === quality);
    return `
        <tr class="download-table-tr">
            <td>${quality}</td>
            <td>${option?.size || '-'}</td>
            <td>
                <a href="${movie.downloadOptions[0]?.downloadLink || '#'}" class="download-btn" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-google-drive"></i> Download
                </a>
            </td>
        </tr>
    `;
}).join('')}
                        </table>
                    </div>
                    ${similarMovies.length > 0 ? `
                    <hr class="popup-divider">
                    <div class="similar-section">
                        <h3>Similar Movies</h3>
                        <div class="similar-movies-list">
                            ${similarMovies.map(sim => `
                                <div class="similar-movie-card" data-movie-id="${sim.id}" style="cursor:pointer;">
                                    <img src="${sim.bannerLink}" alt="${sim.title}" style="width:60px;height:90px;object-fit:cover;border-radius:4px;">
                                    <div class="similar-movie-title" style="font-size:0.95em;">${sim.title}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(popup);

    // Close popup
    popup.querySelector('.close-popup').onclick = () => popup.remove();
    popup.addEventListener('click', function(e) {
        if (e.target === popup) popup.remove();
    });

    // Add click event for similar movies to open their popup
    popup.querySelectorAll('.similar-movie-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            popup.remove();
            showMoviePopup(card.getAttribute('data-movie-id'));
        });
    });
}

// Make it global
window.showMoviePopup = showMoviePopup;

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return `
        <div class="star-rating">
            ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
            ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
            ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
        </div>
    `;
}

// Get similar movies based on categories
function getSimilarMovies(movie) {
    return movies
        .filter(m => m.id !== movie.id && m.categories.some(cat => movie.categories.includes(cat)))
        .slice(0, 5);
}

// Initialize the movie display
document.addEventListener('DOMContentLoaded', () => {
    // Render featured movies
    renderMovieGrid(movies, 'featured-movies', 'Featured');
    // Render all movies in latest-movies section, sorted by id descending
    renderAllMoviesReverse(movies, 'latest-movies');
});

// Make movies globally available for search
window.movies = movies;

// Function to render all movies in reverse order (newest first)
function renderAllMoviesReverse(movies, containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // আইডি উল্টা (বড় আইডি আগে)
    let sortedMovies = [...movies].sort((a, b) => b.id - a.id);
    if (limit) sortedMovies = sortedMovies.slice(0, limit);

    container.innerHTML = sortedMovies.map(movie => `
        <a class="movie-card" data-movie-id="${movie.id}" href="movie.html?id=${movie.id}">
            <div class="movie-image">
                <img src="${movie.bannerLink}" alt="${movie.title}">
                <span class="movie-category">${movie.categories[0]}</span>
            </div>
            <div class="movie-info">
                <div class="movie-rating">
                    <i class="fas fa-star"></i>
                    <span>${movie.imdbRating}</span>
                </div>
                <h3 class="movie-title">
                    <i class="fas fa-film"></i>
                    ${movie.title}
                </h3>
                <div class="movie-release-date">${movie.releaseDate}</div>
            </div>
        </a>
    `).join('');
}

// Helper: Get unique categories (excluding 'Featured')
function getUniqueCategories() {
    const cats = new Set();
    movies.forEach(m => m.categories.forEach(cat => {
        if (cat !== 'Featured') cats.add(cat);
    }));
    return Array.from(cats);
}
window.getUniqueCategories = getUniqueCategories;

// Function to render category sections dynamically
function renderCategorySections(categories, parentSelector, maxPerCategory = 12) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;
    // Remove old dynamic sections
    parent.querySelectorAll('.dynamic-category-section').forEach(e => e.remove());
    categories.forEach(cat => {
        // Create section
        const section = document.createElement('section');
        section.className = 'movie-section dynamic-category-section';
        section.innerHTML = `
            <h2 class="section-title">${cat} Movies</h2>
            <div id="category-${cat.replace(/\s+/g, '-').toLowerCase()}-movies" class="movie-grid"></div>
        `;
        parent.appendChild(section);
        renderMovieGrid(movies, `category-${cat.replace(/\s+/g, '-').toLowerCase()}-movies`, cat, maxPerCategory);
    });
}
window.renderCategorySections = renderCategorySections;