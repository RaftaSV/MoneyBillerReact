import config from 'config';
import axios from 'axios';
import { useState, useCallback } from 'react';

const { baseUrl } = config;

const defaultOptions = {
  method: 'post', // post | put | delete,
  variables: null,
  refresh: null,
  headers: {},
};

const useMutation = (url, opts = defaultOptions) => {
  const optsResolve = {
    ...defaultOptions,
    ...opts
  };
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const mutationFunc = useCallback(
    async (optsFunc = {}) => {
      const options = {
        ...optsResolve,
        ...optsFunc
      };

      const headers = options.headers;
      setLoading(true);

      try {
        const { data } = await axios[options.method](`${baseUrl}${url}`, options.variables, {headers});
        setData(data);
        setLoading(false);
        if (options.refresh && typeof options.refresh === 'function') {
          await options.refresh();
        }
        return { data, loading: false, errors: null };
      } catch (err) {
        console.log(err);
        setErrors(err);
        setData(null);
        setLoading(false);
        return { data: null, loading: false, errors: err };
      }
    },
    [url, optsResolve]
  );

  return [mutationFunc, { loading, data, errors }];
};

export default useMutation;
