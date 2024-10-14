function getTotalArmorCharms() {
  const common = +$("#a-common").val();
  const rare = +$("#a-rare").val();
  const epic = +$("#a-epic").val();
  const legendary = +$("#a-legendary").val();
  const unique = +$("#a-unique").val();

  const totalCharms = (common * 10 + rare * 20 + epic * 30 + legendary * 40 + unique * 50);
  return totalCharms;
}

function getTotalHealthCharms() {
  const common = +$("#h-common").val();
  const rare = +$("#h-rare").val();
  const epic = +$("#h-epic").val();
  const legendary = +$("#h-legendary").val();
  const unique = +$("#h-unique").val();

  const totalCharms = (common * 10 + rare * 20 + epic * 30 + legendary * 40 + unique * 50);
  return totalCharms;
}

function getBaseArmorByPiece(piece) {
  const rarity = $(`#${piece}-rarity`).val();
  const level = +$(`#${piece}-level`).val();
  return getArmorPieceHP(piece, rarity, level);
}

function getBaseArmor() {
  const helmet = getBaseArmorByPiece("helmet");
  const shoulders = getBaseArmorByPiece("shoulders");
  const arms = getBaseArmorByPiece("arms");
  const body = getBaseArmorByPiece("body");
  const legs = getBaseArmorByPiece("legs");

  const baseArmor = helmet + shoulders + arms + body + legs;
  return baseArmor;
}

function getTotalArmor(totalCharms) {
  const base_armor = getBaseArmor();
  const totalArmor = Math.floor(base_armor * (1 + +(totalCharms/100).toFixed(2)));
  return totalArmor;
}


function getTotalHealth(totalCharms, knightLevel, gauntletBonus) {
  const base_health = getBaseHealthPerLevel(knightLevel);
  const totalHealth = Math.floor(base_health * (1 + +(gauntletBonus / 100).toFixed(2) + +(totalCharms/100).toFixed(2)));
  return totalHealth;
}

function calcArmorHealth() {
  const knightLevel = +$("#knightLevel").val();
  const gauntletBonus = +$("#gauntlet-bonus").val();

  const totalArmorCharms = getTotalArmorCharms();
  const totalHealthCharms = getTotalHealthCharms();

  const totalArmor = getTotalArmor(totalArmorCharms);
  const totalHealth = getTotalHealth(totalHealthCharms, knightLevel, gauntletBonus);

  return [totalArmor, totalHealth];
}
