const API_INFOS = "/api/infos";

export async function getInfosCours() {
    try {
      const response = await fetch(`${API_INFOS}/getInfos`);
      if (response.ok) {
        const infos = await response.json();
        console.log("infos", infos);
        return infos;
      }
    } catch (error) {
      console.error(error);
    }
    return null;
  }