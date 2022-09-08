import numberFormater from 'easy-number-formatter';
import uuid from 'react-uuid';
export function omit<T extends object, K extends keyof T>(
  obj: T,
  fields: K[],
): Omit<T, K> {
  const clone = { ...obj };

  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      delete clone[key];
    });
  }

  return clone;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const callAll =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args));

export function setItemId() {
  return uuid();
}

export const setLocalStorage = (name: string, value: any, strigify = true) => {
  if (strigify) {
    return localStorage.setItem(name, JSON.stringify(value));
  } else {
    return localStorage.setItem(name, value);
  }
};

export const getLocalStorage = (name: string, parse = true) => {
  try {
    if (parse) {
      return JSON.parse(localStorage.getItem(name) || '{}');
    } else {
      return localStorage.getItem(name);
    }
  } catch (e) {
    return undefined;
  }
};

export const removeLocalStorage = (name: string) => {
  localStorage.removeItem(name);
};

export const FormatNumber = (number: number | string) => {
  let newNumber = number;
  const isString = typeof newNumber === 'string';
  if (isString) {
    const updatedNumber = Number(newNumber);
    if (typeof updatedNumber !== 'number') {
      throw Error('please provide a vaild number');
    }

    newNumber = updatedNumber;
  }

  return numberFormater.formatNumber(newNumber);
};
export const isValidUrl = (url?: string) => {
  const regex = new RegExp(
    /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
  );
  return regex.test(url || '');
};
export const addProtocol = (url: string) => {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = 'http://' + url;
  }
  return url;
};

export function getUrlParts(url: string | undefined) {
  if (url) {
    const vidUrl = new URL(addProtocol(url));
    const hostName = vidUrl.hostname;
    const protocol = vidUrl.protocol;
    const search = vidUrl.search;
    const pathname = vidUrl.pathname;
    let companyName = '';
    if (hostName) {
      if (hostName.includes('www')) {
        companyName = hostName.split('.')[1];
      } else {
        companyName = hostName.split('.')[0];
      }
    }
    return { hostName, companyName, protocol, search, pathname };
  }
  return {
    hostName: '',
    companyName: '',
    protocol: '',
    search: '',
    pathname: '',
  };
}
export const URLParts = (url?: string) => {
  let obj: {
    url: string;
    hostName: string;
    protocol: string;
    search: string;
    pathname: string;
  } = {
    url: '',
    hostName: '',
    protocol: '',
    search: '',
    pathname: '',
  };
  if (url) {
    const { hostName, protocol, search, pathname } = getUrlParts(url);
    obj = {
      url: `${protocol}//${hostName}${pathname}`,
      hostName,
      protocol,
      search,
      pathname,
    };
  }
  return obj;
};
