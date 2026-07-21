module.exports = (req, res) => {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Authorization code not received."
    });
  }

  res.status(200).json({
    success: true,
    message: "OAuth callback received successfully.",
    code,
    state
  });
};
