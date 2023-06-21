const { useState, useEffect } = require('react');

const Qoutes = () => {
  const [qoute, setQoute] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=freedom',
          {
            headers: {
              'X-Api-Key': 'vZdI6eGz2cS+jTb71dvouA==X8Xd3lMbKviCRmqW',
            },
          });

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setQoute(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Something went wrong!</p>;
  }
  if (loading) return <p>Loading...</p>;

  return (
    <div className="qoutes">
      {qoute.map((item) => (
        <p key={1}>
          <p>{item.quote}</p>
          {' '}
          <p>
            -
            {item.author}
          </p>
        </p>
      ))}
    </div>
  );
};

export default Qoutes;
