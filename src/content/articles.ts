import type { Article, Category } from './types';
import { ARTICLES_BATCH2 } from './articles-batch2';
import { ARTICLES_BATCH3 } from './articles-batch3';
import { ARTICLES_BATCH4 } from './articles-batch4';

/**
 * jai.lat editorial library — original, independent, plain-English guides to
 * investing, saving and building lasting wealth. Educational only, no tips,
 * no "get rich", every article original, all under a site-wide disclaimer.
 */

export const CATEGORIES: Category[] = [
  { slug: 'investing', name: 'Investing', tagline: 'Index funds, diversification and the long game', icon: '📈' },
  { slug: 'saving', name: 'Saving', tagline: 'Emergency funds, rates and automating money', icon: '🏦' },
  { slug: 'income', name: 'Income', tagline: 'Raises, side income and growing what you earn', icon: '💼' },
  { slug: 'mindset', name: 'Money Mindset', tagline: 'Habits, psychology and avoiding costly mistakes', icon: '🧭' },
  { slug: 'retirement', name: 'Retirement', tagline: 'Compounding, drawdown and financial freedom', icon: '🌅' },
];

export const ARTICLES: Article[] = [
  {
    slug: 'pay-yourself-first',
    category: 'saving',
    title: 'Pay Yourself First: The One Rule That Quietly Builds Wealth',
    excerpt:
      'Most people save whatever is left at the end of the month, and nothing is left. Reversing the order — saving before you spend — is the single habit that changes everything.',
    date: '2026-07-02',
    minutes: 7,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'There is a reason almost every book on building wealth eventually arrives at the same three words: pay yourself first. It sounds like a slogan, but underneath it is the one behavioural change that separates people who slowly get ahead from people who stay stuck no matter what they earn.',
        'The idea is simple and slightly counterintuitive. Instead of spending first and saving whatever survives to the end of the month, you save first — automatically, the day you get paid — and then live on the rest. That reversal is small in mechanics and enormous in results.'] },
      { h: 'Why "save what\'s left" always fails', p: [
        'When saving is the last thing you do, it competes with every want, bill and impulse all month long, and it loses. Life expands to fill the money available, so there is reliably nothing left at the end — a pattern that persists whether someone earns a little or a lot. It is not a discipline problem so much as an ordering problem.',
        'Paying yourself first removes the competition. The savings leave your account before you can spend them, so you never see the money as available and you adjust your spending to the smaller amount without noticing — exactly the way you adjust to a pay cut you did not choose. What felt impossible at the end of the month turns out to be painless at the start.'] },
      { h: 'How to set it up', p: [
        'Automate a transfer for the day after payday that moves a fixed amount into savings and investments before anything else happens. Start with a percentage small enough that you barely feel it — even a modest slice is the point, because you are building the habit, not the balance, in the first months. Then raise it a little each time your income rises, so your saving grows faster than your lifestyle.',
        'The magic is that once it is automatic, willpower is no longer required. You are not deciding to save every month and resisting every temptation; you decided once, and the system does the rest quietly in the background for years.'] },
      { h: 'The compounding effect on your life', p: [
        'Over time, paying yourself first does two things. It builds the actual money — the emergency fund, then the investments that compound. And it quietly rewires your relationship with money, because you learn that you can live comfortably on less than you earn, which is the true definition of financial security regardless of income.',
        'This is not a trick to get rich quickly; it is the boring engine underneath nearly every story of getting wealthy slowly. Reverse the order, automate it, and let time do the work.'] },
    ],
  },
  {
    slug: 'index-fund-investing-basics',
    category: 'investing',
    title: 'Index Fund Investing: The Boring Strategy That Beats Most Experts',
    excerpt:
      'The most evidence-backed idea in investing, explained from scratch — why owning everything cheaply tends to beat trying to pick winners, and the discipline that makes it work.',
    date: '2026-07-04',
    minutes: 9,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'If long-term investing has one genuinely settled conclusion, it is this: for most people, a low-cost, broadly diversified index fund held for decades tends to beat trying to pick individual winners. It is the least glamorous idea in finance and one of the most reliable, and understanding why is the foundation of sensible investing.',
        'This is education, not a recommendation to buy anything specific, and all investing carries the risk of loss. But the shape of the approach is worth knowing before you put a penny anywhere.'] },
      { h: 'What an index fund is', p: [
        'A market index is simply a list — for example, the largest companies in a country or across the world. An index fund mechanically buys everything on that list in proportion, so a single share of the fund makes you a fractional owner of hundreds or thousands of companies at once. There is no star manager trying to outguess the market; the fund just tracks it, which is why it is cheap to run.',
        'That cheapness is the whole game over decades. A fund quietly charging 1% a year versus one charging 0.1% does not sound like much, but compounded across thirty years the difference can consume a large slice of your final balance. Every fraction of a percent you do not pay in fees is return you keep.'] },
      { h: 'Why it beats "brilliant"', p: [
        'Actively managed funds pay talented people to pick winners and charge more for the effort. The repeatedly documented, uncomfortable finding is that after those higher fees, the large majority of active funds underperform the simple index over long periods — and the rare ones that beat it in one decade are seldom the same ones that beat it in the next. You cannot reliably identify tomorrow\'s winners in advance, so paying extra to try is, on average, a losing bet.',
        'The index fund sidesteps the whole contest: instead of trying to be smarter than the market, it accepts the market\'s return minus a tiny cost — a return most professionals fail to beat.'] },
      { h: 'The discipline it demands', p: [
        'The maths only pays off if you supply the behaviour: invest regularly and automatically, diversify broadly, and then leave it alone through the inevitable crashes. Markets fall, sometimes sharply, and selling in a downturn is the single most expensive mistake a small investor makes, because it locks in losses and misses the recovery. The best-performing investors are often simply the ones who never interfere.',
        'Keep costs low, diversify widely, invest for years not months, and let compounding and discipline do the work that stock-picking cannot. That is the entire strategy, and its power is in how little it asks you to do once it is running.'] },
    ],
  },
  {
    slug: 'compound-interest-time',
    category: 'retirement',
    title: 'The Real Magic of Compounding: Why Starting Early Beats Saving More',
    excerpt:
      'Compounding is a curve, and human intuition is a straight line — which is why almost everyone underestimates it. The maths, made concrete, and the one habit that unlocks it.',
    date: '2026-07-06',
    minutes: 7,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Compounding is the quiet engine underneath every long-term plan, and nearly everyone underestimates it, because our intuition is built for straight lines while compounding bends upward. Money grows; then the growth itself grows; then that growth grows — and over decades the curve rises in a way that feels almost unfair to anyone who started late.',
        'The single most valuable implication is this: time in the market matters more than the amount you put in. The best day to start was years ago; the second best is today.'] },
      { h: 'Why time beats amount', p: [
        'Picture two savers. One invests a modest amount each month from age 25 to 35, then stops forever. The other starts at 35 and invests the same amount every month all the way to 65. In many realistic scenarios the first — who contributed for only ten years — ends up with as much or more, purely because their early money had an extra decade to compound. That result surprises almost everyone, and it is the whole case for starting early.',
        'The lesson is not that late starters are doomed; it is that every year of delay is quietly expensive. "I\'ll start when I earn more" trades the most powerful years of compounding for a slightly bigger contribution later — usually a bad swap.'] },
      { h: 'The rule of 72', p: [
        'A useful shortcut: divide 72 by your annual return to estimate how many years it takes money to double. At a 7% return, money doubles roughly every ten years; at 3%, roughly every twenty-four. That single ratio explains why small differences — in fees, in return, in when you start — become enormous gaps over a working life.',
        'Temper the maths with honesty: real returns are lumpy, markets fall as well as rise, and past performance guarantees nothing. Compounding is a tailwind you harness over decades, not a promise about any single year.'] },
      { h: 'The one habit that unlocks it', p: [
        'Compounding rewards consistency far more than brilliance or timing, so the habit that matters is the automatic, unglamorous monthly contribution that keeps going through good years and bad. Set it up once, raise it a little whenever your income grows, and resist pausing it when markets fall — falling markets are when your regular contribution buys the most.',
        'The person who invests a steady amount every month for thirty years and never interferes will, more often than not, quietly outperform the clever one who starts late and keeps tinkering. The engine only works if you leave it running.'] },
    ],
  },
  {
    slug: 'lifestyle-inflation',
    category: 'mindset',
    title: 'Lifestyle Inflation: Why Earning More Rarely Makes People Richer',
    excerpt:
      'Give most people a raise and their spending rises to match, leaving them no further ahead. The quiet force that keeps high earners broke, and how to disarm it.',
    date: '2026-07-08',
    minutes: 7,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'One of the great puzzles of personal finance is how many people who earn impressive incomes still feel broke, live paycheck to paycheck, and have little to show for years of good money. The culprit usually is not bad luck or big disasters; it is a slow, invisible force called lifestyle inflation.',
        'Lifestyle inflation is the tendency for spending to rise to match income. Every raise, bonus and promotion is quietly absorbed by a nicer flat, a newer car, more subscriptions and pricier habits — so the gap between what you earn and what you keep never widens, no matter how much the top-line number grows.'] },
      { h: 'Why the treadmill never ends', p: [
        'The trap is that the upgrades feel permanent almost immediately. A better car or a bigger place is thrilling for a few weeks and then becomes the new normal, delivering no lasting boost in happiness but a permanent boost in cost. So you chase the next upgrade to feel the lift again, and your expenses ratchet up with each raise while your savings rate stays flat.',
        'This is why wealth correlates far more with the gap between earning and spending than with income itself. Two people earning the same can end up decades apart in net worth, entirely because one let lifestyle inflation eat every raise and the other did not.'] },
      { h: 'How to disarm it', p: [
        'The antidote is not deprivation; it is deciding in advance where raises go. A practical rule: when your income rises, direct a large share of the increase — say half — straight to savings and investments before it ever reaches your spending, and let your lifestyle rise with only the other half. You still enjoy improvement, just slower than your income, so the gap widens instead of staying flat.',
        'Automating this makes it painless. If the extra money leaves your account before you see it, you never adjust to spending it, and the raise quietly builds your future instead of your monthly bills.'] },
      { h: 'Spend on what you actually value', p: [
        'None of this means never enjoying money. The goal is intentional spending — pouring money generously into the few things that genuinely bring you joy, and ruthlessly cutting the many that you buy on autopilot without noticing. That is a far richer life than reflexively upgrading everything the moment you can.',
        'Disarm lifestyle inflation and something remarkable happens: every future raise makes you meaningfully wealthier instead of merely busier. The earning was never the problem; the automatic spending was.'] },
    ],
  },
  {
    slug: 'diversification-explained',
    category: 'investing',
    title: 'Diversification: The Only Free Lunch in Investing',
    excerpt:
      'Spreading your money isn\'t caution for the timid — it\'s the one way to reduce risk without giving up expected return. Why "don\'t put all your eggs in one basket" is mathematically true.',
    date: '2026-07-10',
    minutes: 7,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Economists like to say diversification is the only free lunch in investing, and it is one of the rare pieces of financial folk wisdom that is also rigorously true. Spreading your money across many different investments reduces your risk without, on average, reducing your expected return — and almost nothing else in finance offers that.',
        'The everyday version — don\'t put all your eggs in one basket — is exactly right, and understanding why turns a cliché into a tool you can use deliberately.'] },
      { h: 'Why concentration is a gamble', p: [
        'Put all your money in a single company\'s stock and your fortune rides entirely on that one company. If it thrives, you do wonderfully; if it stumbles, is disrupted, or goes bankrupt, you can lose everything. Individual companies fail all the time, including famous, seemingly unshakeable ones, and no amount of research reliably predicts which will. Concentration is a bet that you know something the whole market does not.',
        'Spread the same money across hundreds or thousands of companies, and no single failure can sink you. The disasters and the triumphs average out, and you capture the overall growth of the market rather than the fate of one roll of the dice.'] },
      { h: 'Diversify across more than stocks', p: [
        'Real diversification goes beyond owning many companies. It means spreading across different types of assets that do not all move together — stocks and bonds behave differently, and different regions and industries rise and fall at different times. When one part of your portfolio is falling, another may be steady or rising, which smooths the ride and reduces the chance that everything drops at once.',
        'A broad global index fund delivers a great deal of this diversification in a single, cheap holding, which is part of why such funds are a common foundation for ordinary investors. Adding some bonds moderates the swings further, at the cost of some expected return — a trade you tune to your own tolerance.'] },
      { h: 'The limits of the free lunch', p: [
        'Be clear about what diversification does and does not do. It protects you from the catastrophic risk of any single investment, and it smooths your returns. It does not protect you from the whole market falling at once, which happens periodically and is simply the price of the long-term returns that stocks have historically offered. No sensible diversification removes that.',
        'The takeaway is calm and boring: own a wide spread of assets, resist the temptation to bet big on any single one, and accept the market\'s ups and downs as the cost of its long-run growth. Diversification will not make you rich overnight, but it makes sure that no single mistake makes you poor.'] },
    ],
  },
  {
    slug: 'emergency-fund-first',
    category: 'saving',
    title: 'The Emergency Fund: The Unglamorous Account That Makes Everything Else Possible',
    excerpt:
      'Before investing a penny, build the buffer that turns a crisis into an inconvenience. How much you need, where to keep it, and why it comes first.',
    date: '2026-07-12',
    minutes: 6,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Before the investing, before the clever tax moves, before any exciting money strategy, sits the least glamorous account you will ever open: the emergency fund. It earns modest interest, it does nothing dramatic, and it is the foundation everything else is built on.',
        'Its job is to turn a bad surprise — a lost job, a broken boiler, a medical bill — into a manageable inconvenience rather than the moment your whole plan unravels into expensive debt. Skip it, and every setback gets financed at high interest, quietly undoing years of careful saving.'] },
      { h: 'How much you need', p: [
        'The standard target is three to six months of essential expenses — not income, expenses. Add up what you genuinely could not stop paying: housing, food, utilities, insurance, minimum debt payments, transport. If your income is stable, three months may do; if you are self-employed or the sole earner, aim higher. The figure can look daunting, but it is built in instalments, and a half-built fund is vastly better than none.',
        'Crucially, the emergency fund comes before serious investing. It makes no sense to chase market returns while one surprise would force you to sell investments at a loss or reach for a credit card. The buffer is what lets you invest calmly, knowing the next emergency is already covered.'] },
      { h: 'Where to keep it', p: [
        'An emergency fund must be safe, instantly accessible, and slightly out of sight. A high-yield savings account, ideally at a different bank from your everyday account, hits all three — the small friction of transferring from another bank gives you a moment to think before spending. What it must not be: invested in the stock market (it will be down exactly when you need it), locked in a fixed term, or blended into your current account where it evaporates.',
        'The point of the fund is not to grow your wealth; it is to protect it. Judge it on being there when you need it, not on its interest rate.'] },
      { h: 'Build it, then move on', p: [
        'Build it the same way you build any savings: automate a transfer for the day after payday, and funnel windfalls and bonuses straight in until the target is met. Then stop — there is no prize for overfunding it — and turn your attention to investing, secure in the knowledge that your foundation is solid.',
        'It is the least exciting money you will ever set aside, and the reason every more exciting move becomes possible. Everything else is built on this boring, essential base.'] },
    ],
  },
  {
    slug: 'good-debt-bad-debt',
    category: 'mindset',
    title: 'Good Debt vs Bad Debt: A Simple Test for Every Loan',
    excerpt:
      'Not all borrowing is equal. A clear framework for telling the debt that builds a future from the debt that quietly dismantles one.',
    date: '2026-07-14',
    minutes: 6,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Debt has a worse reputation than it fully deserves. Used carelessly, borrowing is one of the fastest ways to wreck a financial life; used deliberately, it is how most people buy a home, gain an education, or start a business they could never fund from savings alone. The skill is not avoiding all debt — it is telling the two kinds apart before you sign.',
        'A useful model divides borrowing into debt that tends to make you wealthier or more capable over time, and debt that simply pulls tomorrow\'s spending into today at a price. The test for sorting them is refreshingly simple.'] },
      { h: 'The test: what is it buying?', p: [
        'Ask what the borrowed money is buying. If it funds something likely to grow in value or earning power — a home in a stable market, education that raises your income, capital for a viable business — it can be "good" debt, provided the terms are sane. The borrowing is a lever letting an asset work for you sooner than you could otherwise afford.',
        'If instead the money buys something that loses value the moment you own it and leaves nothing behind — a holiday financed for months, a depreciating gadget at high interest, everyday spending you cannot cover from income — it is "bad" debt. It borrows from your future to inflate your present, and the interest is the price of that trade.'] },
      { h: 'The interest rate changes everything', p: [
        'Even good purposes become bad debt at a bad rate. A mortgage at a reasonable rate is a tool; the same home financed at a punishing rate can sink you. High-interest revolving debt — the kind you carry month to month — is the most corrosive form, because the interest compounds against you exactly as investing compounds for you, only faster.',
        'A practical rule follows: if a debt\'s interest rate is higher than the return you could reliably earn by investing, paying that debt down is itself one of the best investments available — a guaranteed, risk-free return equal to the interest you stop paying.'] },
      { h: 'A borrowing checklist', p: [
        'Before any loan, run four checks. Does it buy something that lasts or grows? Could you meet the repayment even if your income tightened? Is the interest rate reasonable versus alternatives? And have you read the fees and penalties, not just the headline rate? Debt that passes all four can be a genuine tool; debt that fails one deserves a hard second look.',
        'The goal is not a debt-free life at any cost — it is borrowing on purpose, for things worth borrowing for, on terms you understand. That single discipline separates debt that builds wealth from debt that quietly consumes it.'] },
    ],
  },
  {
    slug: 'dollar-cost-averaging',
    category: 'investing',
    title: 'Dollar-Cost Averaging: Why Investing a Little, Regularly, Beats Waiting',
    excerpt:
      'Trying to buy at the perfect moment is a fool\'s errand. Investing the same amount on a schedule removes the guesswork — and the emotion that wrecks returns.',
    date: '2026-07-16',
    minutes: 6,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'One of the most common ways small investors sabotage themselves is by waiting for the "right time" to invest. They hold cash on the sidelines, watching, trying to buy at the bottom — and either miss years of growth or, just as often, finally buy near a peak out of fear of missing out. Dollar-cost averaging is the simple discipline that sidesteps the whole trap.',
        'The method is unglamorous: invest a fixed amount on a regular schedule — say the same sum every month — regardless of whether the market is up or down. That is the entire technique, and its power is in what it removes.'] },
      { h: 'How it works', p: [
        'When you invest the same amount every month, you automatically buy more shares when prices are low and fewer when prices are high, because a fixed sum stretches further when things are cheap. Over time this tends to lower your average purchase price and, more importantly, it means you never have to guess whether today is a good day to buy. The schedule decides for you.',
        'That removal of timing is the real prize. Nobody, including professionals, reliably calls market tops and bottoms, so a strategy that does not require it is on firm ground. You trade the impossible task of perfect timing for the achievable task of showing up consistently.'] },
      { h: 'The emotional advantage', p: [
        'The deeper benefit is behavioural. Investing on autopilot means you keep buying through crashes, when fear tells everyone else to stop — and buying during downturns, when prices are low, is exactly what long-term investors should do and almost none manage emotionally. The schedule overrides the fear, turning market falls from a reason to panic into a reason your regular contribution buys more.',
        'It also removes the paralysis of waiting. Instead of agonising over whether to invest, you have already decided; the money goes in every month whether the headlines are cheerful or grim.'] },
      { h: 'The honest caveat', p: [
        'One point of fairness: if you happen to have a large lump sum and a long horizon, historical data suggests investing it all at once has often done slightly better on average than spreading it out, simply because markets rise more often than they fall. Dollar-cost averaging\'s strength is not always maximising the mathematical average; it is making steady investing psychologically possible and removing timing risk for the money you earn month to month.',
        'For most people investing from a monthly income, it is the natural and sensible approach: a fixed amount, on a schedule, through good times and bad, for years. Boring, automatic, and effective.'] },
    ],
  },
  {
    slug: 'raise-negotiation-basics',
    category: 'income',
    title: 'Growing Your Income: The Lever Most People Neglect',
    excerpt:
      'You can only cut expenses so far, but the ceiling on earning is far higher. Why raising income deserves as much attention as budgeting — and how to approach it.',
    date: '2026-07-18',
    minutes: 7,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Personal finance advice leans heavily on cutting expenses, and frugality genuinely matters — but it has a hard floor. You can only trim so much before there is nothing left to cut, and an obsessive focus on small economies can distract from the lever with a far higher ceiling: growing what you earn.',
        'Income has no theoretical cap the way spending has a floor, which is why, over a career, increasing your earning power often moves the needle more than any budgeting trick. Both matter, but the income side is frequently the neglected half.'] },
      { h: 'Why the raise you already have is underused', p: [
        'The most overlooked source of higher income is the job you already hold. Many people stay quietly underpaid for years because they never ask, or because they assume raises simply arrive on schedule. In reality, compensation often rises fastest for those who make a considered case for it — who document their contributions, understand the value they add, and raise the conversation professionally rather than waiting to be noticed.',
        'This is not about aggression; it is about advocacy. Keeping a simple running record of what you have accomplished and the problems you have solved turns a vague "I deserve more" into a concrete case, and a concrete case is far harder to dismiss.'] },
      { h: 'Skills compound like money', p: [
        'Beyond any single raise, the durable way to grow income is to grow the value of what you can do. Skills compound much like invested money: each new capability builds on the last, and over years they can move you into work that simply pays more. Time spent deliberately learning a valuable skill often returns more, over a career, than the same time spent clipping coupons.',
        'The mechanism is straightforward. Higher-value work commands higher pay, and the way to reach higher-value work is to become able to do things that fewer people can. Treat learning as an investment with a long payback, not a luxury for spare time.'] },
      { h: 'Balance the two levers', p: [
        'The wealthiest financial position combines both sides: a growing income and a spending level that does not rise to swallow it. Growing income while letting lifestyle inflation eat every raise leaves you no better off; controlling spending while never increasing income leaves money on the table. The two together — earn more, keep the gap — is what compounds into real wealth.',
        'So give the income side the attention it deserves. Advocate for your worth, invest in skills that pay, and remember that while budgeting has a floor, earning has a horizon.'] },
    ],
  },
  {
    slug: 'net-worth-track',
    category: 'mindset',
    title: 'Net Worth: The One Number That Actually Measures Progress',
    excerpt:
      'Income tells you what flows in; net worth tells you what you\'ve kept. Why the number that matters is the difference between what you own and what you owe.',
    date: '2026-07-20',
    minutes: 6,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'People obsess over their income, and income matters, but it is a flow, not a store — it measures what comes in, not what you have built. The number that actually tracks your financial progress is net worth: the total of everything you own minus everything you owe. It is the scoreboard, and remarkably few people ever check it.',
        'Calculating it is simple. Add up your assets — cash, savings, investments, the value of property — and subtract your liabilities: mortgages, loans, credit-card balances. The result, positive or negative, is a single honest snapshot of where you stand.'] },
      { h: 'Why it beats income as a measure', p: [
        'Income can be dangerously misleading. Two people earning the same salary can have wildly different net worths — one deep in debt with nothing saved, the other quietly wealthy — because what separates them is not what they earn but what they keep. High earners with high spending often have surprisingly low or negative net worth, while modest earners who save consistently accumulate real wealth. Net worth cuts through the illusion of a big salary.',
        'Tracking it also changes behaviour in a useful way. Because paying down debt and building savings both move the number in the same direction, net worth naturally rewards the two things that actually build wealth, and makes visible the slow progress that a monthly bank balance hides.'] },
      { h: 'How to track it without obsessing', p: [
        'You do not need fancy tools. Once a month or even once a quarter, list your assets and liabilities and note the total. Watching the number over time is the point — a single snapshot means little, but the trend across a year tells you whether your habits are building wealth or eroding it. A steadily rising line is the clearest sign you are on the right path.',
        'Resist checking it daily; net worth moves slowly and is affected by market swings you should ignore. The trend over years, not the wobble this week, is what matters.'] },
      { h: 'From number to motivation', p: [
        'The quiet benefit of tracking net worth is motivation. Progress that is otherwise invisible — the debt slowly shrinking, the investments slowly compounding — becomes a visible, rising line that makes the boring habits feel worthwhile. It turns delayed gratification into something you can actually see accumulating.',
        'Start where you are, even if the number is negative, because the direction matters more than the starting point. A rising net worth, month after month, is the truest measure that your financial life is moving the right way.'] },
    ],
  },
  {
    slug: 'retirement-three-levers',
    category: 'retirement',
    title: 'Retirement Made Simple: The Three Levers You Actually Control',
    excerpt:
      'Behind the acronyms and projections, how you retire comes down to three things you can steer: when you start, how much you save, and how much you lose to fees.',
    date: '2026-07-22',
    minutes: 7,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Retirement planning has a reputation for being impossibly complex — a fog of accounts, tax rules and projections that makes people give up and hope for the best. Strip away the jargon, though, and the outcome of a retirement plan is driven overwhelmingly by three levers you actually control: when you start, how much you contribute, and how much you lose to fees.',
        'Everything else is refinement on top of those three. Pull them in the right direction and the details matter far less than the industry\'s complexity suggests.'] },
      { h: 'Lever one: start early', p: [
        'Retirement saving is the purest example of compounding, and compounding rewards time above all else. A contribution made in your twenties has decades to grow; the same contribution made in your fifties has only years. That is why a modest, consistent contribution begun early can end up worth more than a much larger one begun late — the early money simply has more time to multiply.',
        'The uncomfortable but freeing implication is that the most powerful move in retirement planning is not a clever fund or a tax trick, it is starting now with whatever you can. You cannot buy back the years you delay, so the cost of waiting is real even when it is invisible.'] },
      { h: 'Lever two: contribute enough, and grab any match', p: [
        'If an employer offers to match retirement contributions, that match is the closest thing to free money in finance, and not taking it in full leaves a guaranteed return on the table. Always contribute at least enough to capture the entire match before directing money anywhere else. Beyond that, aim to raise your contribution rate a little every time your income rises, so your saving grows faster than your lifestyle.',
        'How much is enough depends on when you start and when you hope to retire — start later and you must save more, which loops straight back to why starting early is so valuable. The two levers reinforce each other.'] },
      { h: 'Lever three: keep costs low', p: [
        'Over a horizon of decades, fees are not a footnote — they are one of the biggest determinants of your final balance. A retirement account quietly charging high annual fees can hand a large share of your lifetime returns to the provider without you ever seeing a bill. Favour low-cost, broadly diversified funds and check what you are being charged; a fraction of a percent saved every year compounds into a meaningful difference by the end.',
        'This is general education, not personalised advice, and pension rules and tax treatment vary by country and change over time. But the enduring principles travel well: start early, contribute enough to grab any match, keep costs low, and let time do the heavy lifting.'] },
    ],
  },
  {
    slug: 'money-and-happiness',
    category: 'mindset',
    title: 'Money and Happiness: What the Evidence Actually Says',
    excerpt:
      'More money helps, up to a point, and then the returns change shape. What research suggests about spending for wellbeing — and why how you spend matters more than how much.',
    date: '2026-07-24',
    minutes: 6,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'The relationship between money and happiness is more interesting than either "money can\'t buy happiness" or "more is always better" suggests. The honest picture, drawn from a good deal of research, is that money matters a great deal for wellbeing — but in ways that are easy to get wrong, and that change shape as income rises.',
        'Understanding the pattern helps you use money as a tool for a better life rather than a scoreboard you can never quite win.'] },
      { h: 'Money buys relief from stress more than joy', p: [
        'At lower incomes, more money reliably improves wellbeing, largely because it removes the grinding stress of not being able to cover essentials. Escaping financial insecurity — being able to pay the rent, handle an emergency, sleep without money fear — is one of the clearest ways money improves life. This is why an emergency fund and freedom from high-interest debt buy so much peace relative to their cost.',
        'Higher up, the picture shifts. Additional money still tends to help, but the boost per extra pound generally shrinks, and the gains come less from having more and more from having enough — enough that money stops being a source of anxiety.'] },
      { h: 'How you spend matters more than how much', p: [
        'Research consistently finds that what you buy shapes wellbeing more than the raw amount you spend. Experiences — trips, time with people you love, learning — tend to deliver more lasting satisfaction than possessions, which quickly become the new normal. Spending that buys time (paying to remove a dreaded chore) and spending on other people both punch above their weight for happiness.',
        'Meanwhile, much routine spending delivers a brief lift and then fades, leaving only the cost. The practical lesson is to spend generously on the few things that genuinely matter to you and cut ruthlessly on the many that you buy on autopilot without noticing.'] },
      { h: 'The real prize: options', p: [
        'Perhaps the deepest way money buys wellbeing is by buying options — the freedom to say no to work you hate, to weather a setback, to make choices from security rather than desperation. That is what an emergency fund, low debt and growing savings actually purchase: not luxury, but choice. And choice, more than any possession, is what money is good for.',
        'None of this is financial advice; it is a reminder of the point of the exercise. Build wealth not to hit a number, but to buy security, time and the freedom to live deliberately. Used that way, money genuinely does improve life.'] },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
export function getArticlesByCategory(cat: string): Article[] {
  return ARTICLES.filter((a) => a.category === cat).sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Batch 2 merges into the same library (kept in its own module so this
// file stays reviewable). All lists/pages sort by date, so ordering here is
// irrelevant.
ARTICLES.push(...ARTICLES_BATCH2);
ARTICLES.push(...ARTICLES_BATCH3);
ARTICLES.push(...ARTICLES_BATCH4);
