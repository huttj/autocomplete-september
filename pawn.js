function isInBounds(location) {
  const [l, n] = location.split('');
  if (l < 'a' || l > 'h' || +n < 1 || +n > 8) {
    return false;
  }
  return true;
}




function isSafe(locations) {
  const [pawn, bishop] = locations.split(' ');

  const [letter, number] = pawn.split('');
  
  let l, n;
  let candidate;
  
  candidate = pawn;
  l = letter;
  n = number;

  do {
    l = String.fromCharCode(+l.charCodeAt(0) + 1)
    n = +n + 1;
    candidate = l + n;

    if (candidate === bishop) {
      return 'captured';
    }

  } while (isInBounds(candidate));


  candidate = pawn;
  l = letter;
  n = number;

  do {
    l = String.fromCharCode(+l.charCodeAt(0) - 1)
    n = +n + 1;
    candidate = l + n;

    if (candidate === bishop) {
      return 'captured';
    }

  } while (isInBounds(candidate));


  candidate = pawn;
  l = letter;
  n = number;

  do {
    l = String.fromCharCode(+l.charCodeAt(0) + 1)
    n = +n - 1;
    candidate = l + n;

    if (candidate === bishop) {
      return 'captured';
    }

  } while (isInBounds(candidate));


  candidate = pawn;
  l = letter;
  n = number;

  do {
    l = String.fromCharCode(+l.charCodeAt(0) - 1)
    n = +n - 1;
    candidate = l + n;

    if (candidate === bishop) {
      return 'captured';
    }

  } while (isInBounds(candidate));

  return 'safe';
}

function testAndLog(location) {
  console.log(location, isSafe(location));
}

testAndLog('a1 h8');
testAndLog('a8 h1');
testAndLog('a1 h3');
testAndLog('a3 b4');