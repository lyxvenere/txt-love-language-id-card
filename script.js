function downloadCard() {
  const card = document.getElementById('card');
  const originalText = card.innerHTML;
  card.innerHTML = 'Generating Image...'; // Or a loading icon

  html2canvas(card).then(canvas => {
    card.innerHTML = originalText; // Restore original content
    const link = document.createElement('a');
    link.download = 'TXT_Love_Language_Card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
