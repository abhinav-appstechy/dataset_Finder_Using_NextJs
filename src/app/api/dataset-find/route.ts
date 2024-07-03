export async function POST(request: Request) {
  const { query, page, sortMethod } = await request.json();
  // console.log("Query-", query);
  if (query.trim() === "") {
    return new Response(JSON.stringify({ status: "error" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }


  const hashMapForSort:any = {
    "Hotness": "DATASET_SORT_BY_HOTTEST",
    "Most Votes": "DATASET_SORT_BY_VOTES",
    "New": "DATASET_SORT_BY_PUBLISHED",
    "Updated": "DATASET_SORT_BY_UPDATED",
    "Usability": "DATASET_SORT_BY_USABILITY"
  }

  try {
    const res = await fetch(
      "https://www.kaggle.com/api/i/datasets.DatasetService/SearchDatasets",
      {
        headers: {
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          "content-type": "application/json",
          pragma: "no-cache",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-kaggle-build-version": "ee7d6d932fa12e3e39607964e4799e1eb9e3c4d6",
          "x-xsrf-token":
            "CfDJ8GYiNaMVVSVCnegdIdgHCPNJAXBO0uDxQ9Ba8Qo6LIl4ppKzO15NtH5gN-ABXyKf4i6K8dAnoHyjrhY68UrtPw_X4ZLPnWE9COxPS28ZFlJylA",
          cookie:
            "ka_sessionid=d6c3bee5ce6a3eb6b13db78ec6737797; CSRF-TOKEN=CfDJ8GYiNaMVVSVCnegdIdgHCPPQwQVWgT3n2M3kwaVm4qUXvgZ6u4QHtyB-J-dwQDggt04_eN6aAgpomeDVFxnOu7vdCRXSDtN5KHMMGpGFEQ; XSRF-TOKEN=CfDJ8GYiNaMVVSVCnegdIdgHCPNJAXBO0uDxQ9Ba8Qo6LIl4ppKzO15NtH5gN-ABXyKf4i6K8dAnoHyjrhY68UrtPw_X4ZLPnWE9COxPS28ZFlJylA; CLIENT-TOKEN=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJpc3MiOiJrYWdnbGUiLCJhdWQiOiJjbGllbnQiLCJzdWIiOiIiLCJuYnQiOiIyMDI0LTA3LTAyVDA5OjU2OjUyLjY1Njc2MTVaIiwiaWF0IjoiMjAyNC0wNy0wMlQwOTo1Njo1Mi42NTY3NjE1WiIsImp0aSI6Ijg3MzAxM2Y2LTZkMzctNGZmNi05YjIxLTg1YWRmNjA2ZDE2MSIsImV4cCI6IjIwMjQtMDgtMDJUMDk6NTY6NTIuNjU2NzYxNVoiLCJhbm9uIjp0cnVlLCJmZiI6WyJLZXJuZWxzRmlyZWJhc2VMb25nUG9sbGluZyIsIkFsbG93Rm9ydW1BdHRhY2htZW50cyIsIkZyb250ZW5kRXJyb3JSZXBvcnRpbmciLCJSZWdpc3RyYXRpb25OZXdzRW1haWxTaWdudXBJc09wdE91dCIsIkRpc2N1c3Npb25zUmVhY3Rpb25zIiwiRGF0YXNldFVwbG9hZGVyRHVwbGljYXRlRGV0ZWN0aW9uIiwiRGF0YXNldHNMbG1GZWVkYmFja0NoaXAiLCJNZXRhc3RvcmVDaGVja0FnZ3JlZ2F0ZUZpbGVIYXNoZXMiLCJLTU1hdGVyaWFsVUlEaWFsb2ciLCJBbGxSb3V0ZXNUb1JlYWN0Um91dGVyIiwiQ2hlY2tFZmZpY2llbnRFeHRlbnNpb25zIiwiTXVpVGFiQmFyIiwiVXNlckxpY2Vuc2VBZ3JlZW1lbnRTdGFsZW5lc3NUcmFja2luZyJdLCJmZmQiOnsiS2VybmVsRWRpdG9yQXV0b3NhdmVUaHJvdHRsZU1zIjoiMzAwMDAiLCJFbWVyZ2VuY3lBbGVydEJhbm5lciI6Int9IiwiQ2xpZW50UnBjUmF0ZUxpbWl0UXBzIjoiNDAiLCJDbGllbnRScGNSYXRlTGltaXRRcG0iOiI1MDAiLCJGZWF0dXJlZENvbW11bml0eUNvbXBldGl0aW9ucyI6IjYwMDk1LDU0MDAwLDU3MTYzLDgwODc0IiwiQWRkRmVhdHVyZUZsYWdzVG9QYWdlTG9hZFRhZyI6ImRpc2FibGVkIiwiTW9kZWxJbmZlcmVuY2VQYXJhbWV0ZXJzIjoieyBcIm1heF90b2tlbnNcIjogMTI4LCBcInRlbXBlcmF0dXJlXCI6IDAuNCwgXCJ0b3Bfa1wiOiA1IH0iLCJDb21wZXRpdGlvbk1ldHJpY1RpbWVvdXRNaW51dGVzIjoiMzAifSwicGlkIjoia2FnZ2xlLTE2MTYwNyIsInN2YyI6IndlYi1mZSIsInNkYWsiOiJBSXphU3lBNGVOcVVkUlJza0pzQ1pXVnotcUw2NTVYYTVKRU1yZUUiLCJibGQiOiJlZTdkNmQ5MzJmYTEyZTNlMzk2MDc5NjRlNDc5OWUxZWI5ZTNjNGQ2In0.; GCLB=CJbJr4WKgc626gEQAw; build-hash=ee7d6d932fa12e3e39607964e4799e1eb9e3c4d6; _ga=GA1.1.1464110774.1719914215; _ga_T7QHS60L4Q=GS1.1.1719914214.1.1.1719914240.0.0.0",
          Referer: `https://www.kaggle.com/datasets?search=${query}`,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: `{\"page\":${page},\"group\":\"DATASET_SELECTION_GROUP_PUBLIC\",\"size\":\"DATASET_SIZE_GROUP_ALL\",\"fileType\":\"DATASET_FILE_TYPE_GROUP_ALL\",\"license\":\"DATASET_LICENSE_GROUP_ALL\",\"viewed\":\"DATASET_VIEWED_GROUP_UNSPECIFIED\",\"categoryIds\":[],\"search\":\"${query}\",\"sortBy\":\"${hashMapForSort[sortMethod]}\",\"includeTopicalDatasets\":false,\"minUsabilityRating\":0,\"feedbackIds\":[]}`,
        method: "POST",
      }
    );

    // console.log(res);
    if (!res.ok) {
      return new Response(
        JSON.stringify({
          status: "error",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await res.json();

    // console.log(data);
    return new Response(
      JSON.stringify({
        status: "success",
        data: data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        status: "error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
