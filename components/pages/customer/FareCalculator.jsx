// Distance-based pricing logic
export default function FareCalculator(distance) {
  // Base fare + per km rate
  const baseFare = 100;
  const perKm = 50;
  
  // Minimum fare
  const minFare = 150;
  
  // Calculate fare
  let fare = baseFare + (distance * perKm);
  
  // Apply minimum fare
  if (fare < minFare) {
    fare = minFare;
  }
  
  // Return rounded fare
  return Math.round(fare);
}