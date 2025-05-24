
// JavaScript to fetch metadata from EC2 instances (within private subnet via ALB)

const endpoints = {
  "meta-1": "/meta1",
  "meta-2": "/meta2"
};

Object.entries(endpoints).forEach(([elementId, path]) => {
  fetch(path)
    .then(res => res.json())
    .then(data => {
      const html = `
        <p><strong>Instance ID:</strong> ${data["instance-id"]}</p>
        <p><strong>Private IP:</strong> ${data["local-ipv4"]}</p>
        <p><strong>AZ:</strong> ${data["placement-availability-zone"]}</p>
        <p><strong>Type:</strong> ${data["instance-type"]}</p>
      `;
      document.getElementById(elementId).innerHTML = html;
    })
    .catch(() => {
      document.getElementById(elementId).innerText = "Unable to fetch metadata.";
    });
});
