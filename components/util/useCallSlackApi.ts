function useCallSlackApi() {
  const perform = async (data: any) => {
    const endpoint =
      "https://hooks.slack.com/services/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";
    const payload = { text: data };
    try {
      const requestOptions = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: JSON.stringify(payload),
      };
      const response = await fetch(endpoint, requestOptions);
      // if (response.ok) {
      //   console.log(response, "response success slack api");
      // } else {
      //   console.log(response, "response failure slack api");
      // }
    } catch (err) {
      console.log(err, "slack api");
    }
  };

  return perform;
}

export default useCallSlackApi;
