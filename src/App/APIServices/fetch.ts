interface IParams {
  url: string;
  body?: string;
  method?: string;
  isJsonResponse?: boolean;
}

export const http = async ({
  url,
  body,
  method = 'GET',
  isJsonResponse = true,
}: IParams) => {
  try {
    const response = await fetch(url, {
      method,
      body,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Authorization': 'Bearer ' + POLKADOT_AUTH_TOKEN
      },
    });
    const res = isJsonResponse ? parseResponse(response) : response;
    return res;
  } catch (err) {
    throw err;
  }
};

function parseResponse(response: any) {
  try {
    if (typeof response !== 'string') {
      const r = response.json();
      return r;
    }
    return response;
  } catch (err) {
    return response;
  }
}
