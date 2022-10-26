import { setToken } from "../../Component/User/Authentication/authenticationSlice";

interface RequestProps {
  url: string;
  methode: "GET" | "POST" | "PATCH" | "DELETE";
  callbackSuccess?: (response: any) => void;
  callbackError?: (response: any) => void;
  data?: object;
  header?: { header: string; value: string }[];
  beforeSend?: () => void;
  afterSend?: () => void;
}

export const Request = (props: RequestProps) => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }
    if (props.afterSend) {
      props.afterSend();
    }
    if (!isJson(request.responseText)) return;
    const response: object = JSON.parse(request.responseText);
    if (request.status === 200) {
      if (props.callbackSuccess) {
        props.callbackSuccess(response);
      }
    } else {
      console.warn(request.responseText);
      if (props.callbackError) {
        props.callbackError(response);
      }
    }
  };

  request.open(props.methode, props.url);
  if (props.header) {
    for (let header of props.header) {
      request.setRequestHeader(header.header, header.value);
    }
  }
  if (props.beforeSend) {
    props.beforeSend();
  }
  request.send(JSON.stringify(props.data));
};

function isJson(item: any) {
  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  return typeof item === "object" && item !== null;
}
