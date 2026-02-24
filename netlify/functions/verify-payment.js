exports.handler = async (event) => {
  try {
    const { paymentId } = JSON.parse(event.body);

    if (!paymentId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ verified: false })
      };
    }

    const response = await fetch(
      `https://payments.yoco.com/api/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.YOCO_SECRET_KEY}`
        }
      }
    );

    const data = await response.json();

    if (data.status === "successful") {
      return {
        statusCode: 200,
        body: JSON.stringify({ verified: true })
      };
    }

    return {
      statusCode: 401,
      body: JSON.stringify({ verified: false })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ verified: false })
    };
  }
};