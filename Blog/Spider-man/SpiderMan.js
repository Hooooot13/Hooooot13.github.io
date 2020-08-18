function Jump() {
  var name = document.getElementById("Name").value;
  var weight = parseInt(document.getElementById("Weight").value);
  var liftCoefficient = parseInt(document.getElementById("Lift-Coefficient").value);
  var squatDistance = parseInt(document.getElementById("Squat-Distance").value);
  var squatTime = parseInt(document.getElementById("Squat-Time").value);
  var weightKg = weight * 0.45359;
  var lift = weight * liftCoefficient;
  var heavyAcceleration = ()(2*squatDistance) / (Math.pow(squatTime, 2))) + 9.81;
  var strength = lift * heavyAcceleration;
  var jumpAcceleration = strength / weight;
  var jumpTime = Math.sqrt(squatDistance/jumpAcceleration);
  var jumpVelocity = jumpAcceleration * jumpTime;
  var jumpHeight = Math.pow(jumpVelocity, 2) / (2 * 9.81);
}
