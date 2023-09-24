useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        console.log(data);
        setMenu(data);
      } catch (error) {
        console.error(error);
        // Handle the error here (e.g., show an error message or perform any necessary actions)
      }
    };
  
    fetchData();
  }, []);