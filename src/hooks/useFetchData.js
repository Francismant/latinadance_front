import { useEffect, useState } from "react";

export function useFetchData(url, way) {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDatas() {
      try {
        const response = await fetch(`${url}/${way}`);
        if (response.ok) {
          const datasBack = await response.json();
          const newModifiedDatas = await Promise.all(
            datasBack.map(async (e) => {
              if (e.image === null) {
                const response = await fetch(
                  URL.createObjectURL(
                    new Blob([new Uint8Array(e.imgBlob.data)])
                  )
                );
                const text = await response.text();
                e.image = text;
              }
              return { ...e };
            })
          );
          setDatas(newModifiedDatas);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDatas();
  }, [url, way]);

  return [[datas, setDatas], isLoading];
}