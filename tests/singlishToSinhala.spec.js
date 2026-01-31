const { test, expect } = require('@playwright/test');

 /*
   (Pos_Fun)
   Covers: greeting, question, command, negative, tense,
   mixed English, numbers/time, places, formatting.
   Theme focus: bank + bus (Singlish -> Sinhala)
 */

const URL = 'https://www.swifttranslator.com/';
const inputBox = (page) => page.locator('textarea').first();
const outputBox = (page) => page.locator('div.whitespace-pre-wrap').first();

test('Pos_Fun_01 - Daily simple sentence: mata godak badaginiyi. -> මට ගොඩක් බඩගිනියි.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mata godak badaginiyi. ');
  await expect(outputBox(page)).toContainText(/මට ගොඩක් බඩගිනියි./);
});

test('Pos_Fun_02 - Simple repeated word sentence: malli dhuva dhuva sellam karanavaa. -> මල්ලි දුව දුව සෙල්ලම් කරනවා.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('malli dhuva dhuva sellam karanavaa. ');
  await expect(outputBox(page)).toContainText(/මල්ලි දුව දුව සෙල්ලම් කරනවා./);
});


test('Pos_Fun_03 - mixed-language with Daily Complex sentense: api town yana gaman udheeta kamu. -> අපි town යන ගමන් උදේට කමු.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('api town yana gaman udheeta kamu. ');
  await expect(outputBox(page)).toContainText(/අපි town යන ගමන් උදේට කමු./);
});

test('Pos_Fun_04 - Daily compound sentense: eyaa sindhuvak kiyanavaa saha natanavaa. -> එයා සින්දුවක් කියනවා සහ නටනවා.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('eyaa sindhuvak kiyanavaa saha natanavaa. ');
  await expect(outputBox(page)).toContainText(/එයා සින්දුවක් කියනවා සහ නටනවා./);
});

test('Pos_Fun_05 - Short Simple question form sentence: eyaata dhaen uNa hodhayidha? -> එයාට දැන් උණ හොදයිද?', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('eyaata dhaen uNa hodhayidha? ');
  await expect(outputBox(page)).toContainText(/එයාට දැන් උණ හොදයිද?/);
});

test('Pos_Fun_06 - Command short form sentence: ikmanata vaeda ivara karanna. -> ඉක්මනට වැඩ ඉවර කරන්න.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('ikmanata vaeda ivara karanna. ');
  await expect(outputBox(page)).toContainText(/ඉක්මනට වැඩ ඉවර කරන්න./);
});

test('Pos_Fun_07 - Simple positive sentence: mama paadam karanavaa. -> මම පාඩම් කරනවා.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mama paadam karanavaa. ');
  await expect(outputBox(page)).toContainText(/මම පාඩම් කරනවා./);
});

test('Pos_Fun_08 - Simple negative sentence: eyaa hariyata sindhu kiyannee naee. -> එයා හරියට සින්දු කියන්නේ නෑ.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('eyaa hariyata sindhu kiyannee naee. ');
  await expect(outputBox(page)).toContainText(/එයා හරියට සින්දු කියන්නේ නෑ./);
});

test('Pos_Fun_09 - Polite greeting sentence: api ethumaava saadharayen piligannavaa. -> අපි එතුමාව සාදරයෙන් පිලිගන්නවා.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('api ethumaava saadharayen piligannavaa. ');
  await expect(outputBox(page)).toContainText(/අපි එතුමාව සාදරයෙන් පිලිගන්නවා./);
});


test('Pos_Fun_10 - Polite greeting sentence: obata suba udhaeesanak veevaa. -> ඔබට සුබ උදෑසනක් වේවා.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('obata suba udhaeesanak veevaa. ');
  await expect(outputBox(page)).toContainText(/ඔබට සුබ උදෑසනක් වේවා./);
});

test('Pos_Fun_11 - Simple request form sentence: mata uthsavayata sahaBhaagii viimata ida dhenna. -> මට උත්සවයට සහභාගී වීමට ඉඩ දෙන්න.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mata uthsavayata sahaBhaagii viimata ida dhenna. ');
  await expect(outputBox(page)).toContainText(/මට උත්සවයට සහභාගී වීමට ඉඩ දෙන්න./);
});

test('Pos_Fun_12 - Response compound sentense: hari, api udhav karannam. -> හරි, අපි උදව් කරන්නම්.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('hari, api udhav karannam. ');
  await expect(outputBox(page)).toContainText(/හරි, අපි උදව් කරන්නම්./);
});

test('Pos_Fun_13 - Simple polite sentence: bohooma kaNagaatuyi mee sidhuviima gaena. -> බොහෝම කණගාටුයි මේ සිදුවීම ගැන.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('bohooma kaNagaatuyi mee sidhuviima gaena. ');
  await expect(outputBox(page)).toContainText(/බොහෝම කණගාටුයි මේ සිදුවීම ගැන./);
});


test('Pos_Fun_14 - Informal command type sentence : meeka aragena hayiyen dhuvapan. -> මේක අරගෙන හයියෙන් දුවපන්.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('meeka aragena hayiyen dhuvapan. ');
  await expect(outputBox(page)).toContainText(/මේක අරගෙන හයියෙන් දුවපන්./);
});


test('Pos_Fun_15 - Simple plural sentence: api kadee yamudha? ->අපි කඩේ යමුද?', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('api kadee yamudha? ');
  await expect(outputBox(page)).toContainText(/අපි කඩේ යමුද\?/);
});

test('Pos_Fun_16 - negative singular sentence: mama nidhaagannee naee. ->මම නිදාගන්නේ නෑ.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mama nidhaagannee naee. ');
  await expect(outputBox(page)).toContainText(/මම නිදාගන්නේ නෑ./);
});


test('Pos_Fun_17 - simple sentence with english brand name: mama, oyaata Email ekak evvaa adha vaeda piLibaDHAva. -> මම, ඔයාට Email එකක් එව්වා අද වැඩ පිළිබඳව.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mama, oyaata Email ekak evvaa adha vaeda piLibaDHAva. ');
  await expect(outputBox(page)).toContainText(/මම, ඔයාට Email එකක් එව්වා අද වැඩ පිළිබඳව./);
});

test('Pos_Fun_18 - Simple sentence with English short form: ayiyaa ATM ekata giyaa salli ganna. -> අයියා ATM එකට ගියා සල්ලි ගන්න.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('ayiyaa ATM ekata giyaa salli ganna. ');
  await expect(outputBox(page)).toContainText(/අයියා ATM එකට ගියා සල්ලි ගන්න./);
});

test('Pos_Fun_19 - simple Future sentence with spaces: api heta rata   yanavaa. -> අපි හෙට රට   යනවා.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('api heta rata   yanavaa. ');
  await expect(outputBox(page)).toContainText(/අපි හෙට රට   යනවා\./);
});


test('Pos_Fun_20 (M) - Long mixed-language sentence: adha mata lecture ekak thiyanavaa. ee nisaa havasata thiyana party ekata mata enna vena ekak naee. heta ta party eka kal dhaa ganna puluvan nam mata heta enna puluvan anivaarenma. hetata kal dhaa gannavanam mata call karanna mathak karalaa. -> අද මට lecture එකක් තියනවා. ඒ නිසා හවසට තියන party එකට මට එන්න වෙන එකක් නෑ. හෙට ට party එක කල් දා ගන්න පුලුවන් නම් මට හෙට එන්න පුලුවන් අනිවාරෙන්ම. හෙටට කල් දා ගන්නවනම් මට call කරන්න මතක් කරලා.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('adha mata lecture ekak thiyanavaa. ee nisaa havasata thiyana party ekata mata enna vena ekak naee. heta ta party eka kal dhaa ganna puluvan nam mata heta enna puluvan anivaarenma. hetata kal dhaa gannavanam mata call karanna mathak karalaa. ');
  await expect(outputBox(page)).toContainText(/අද මට lecture එකක් තියනවා./);
  await expect(outputBox(page)).toContainText(/party/);
  await expect(outputBox(page)).toContainText(/call/);
}
);

test('Pos_Fun_21 - Interrogative sentence with units of mesurements: api adha 6PM vedhdhii assignment eka ivara karanna oonadha? -> අපි අද 6PM වෙද්දී assignment එක ඉවර කරන්න ඕනද?', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('api adha 6PM vedhdhii assignment eka ivara karanna oonadha? ');
  await expect(outputBox(page)).toContainText(/අපි අද 6PM වෙද්දී assignment එක ඉවර කරන්න ඕනද\?/);
});

test('Pos_Fun_22 - Simple sentence with units of mesurements: mee kos gediya 3kg vithara barayi. -> මේ කොස් ගෙඩිය 3kg විතර බරයි.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mee kos gediya 3kg vithara barayi. ');
  await expect(outputBox(page)).toContainText(/මේ කොස් ගෙඩිය 3kg විතර බරයි\./);
});

test('Pos_Fun_23 - Informal compound sentence: ayiyoo dheyiyanee mee manussayata pissu vagee. -> අයියෝ දෙයියනේ මේ මනුස්සයට පිස්සු වගේ.', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('ayiyoo dheyiyanee mee manussayata pissu vagee. ');
  await expect(outputBox(page)).toContainText(/අයියෝ දෙයියනේ මේ මනුස්සයට පිස්සු වගේ\./);
});

test('Pos_Fun_24 - Interrogative request form sentence: mata letter ekak evanna puluvandha? -> මට letter එකක් එවන්න පුලුවන්ද?', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mata letter ekak evanna puluvandha? ');
  await expect(outputBox(page)).toContainText(/මට letter එකක් එවන්න පුලුවන්ද\?/);
});



test('Neg_Fun_01 - Capital conversion error: MAMA BATH UYANAVAA', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('MAMA BATH UYANAVAA ');
  await expect(outputBox(page)).not.toContainText(/මම බත් උයනවා/);
});

test('Neg_Fun_02 - Using unsupported phrases: u free da bro?', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('u free da bro? ');
  await expect(outputBox(page)).not.toContainText(/උ free ඩ bro\?/);
});


test('Neg_Fun_03 - Unusual symbols inputs', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('$$(*&@$@## ');
  await expect(outputBox(page)).not.toContainText(/no conversion/);
});

test('Neg_Fun_04 - Spelling errors', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mmama uda panna ');
  await expect(outputBox(page)).not.toContainText(/ම්මම උඩ පන්න/);
});

test('Neg_Fun_05 - another language words', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('Ciao ');
  await expect(outputBox(page)).not.toContainText(/Ciao/);
});

test('Neg_Fun_06 - number conversion errors', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('123456 ');
  await expect(outputBox(page)).not.toContainText(/123456/);
});

test('Neg_Fun_07 - whitespace only input', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill(' ');
  await expect(outputBox(page)).not.toContainText(/ /);
});

test('Neg_Fun_08 - Sentence with Incorrect order', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('dhuvanavaa mama paninavaa ');
  await expect(outputBox(page)).not.toContainText(/දුවනවා මම පනිනවා/);
});

test('Neg_Fun_09 - unsupported characters', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  const longText = 'xyz oyaa koo? '.repeat(40);
  await inputBox(page).fill(longText);
  await expect(outputBox(page)).not.toContainText(/xයz ඔයා කෝ?/);
});

test('Neg_Fun_10 - Incorrect grammer', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  await inputBox(page).fill('mama natanava ');
  await expect(outputBox(page)).not.toContainText(/මම නටනව/);
});



test('Pos_UI_01 - Real-time conversion', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(URL);
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.type('aayu');
  await expect(output).not.toBeEmpty();
});
