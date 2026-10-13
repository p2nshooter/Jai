import type { Article } from './types';

/**
 * jai.lat editorial library — batch 5 (13 Oct 2026). Five new hand-written
 * long-form guides: insurance as catastrophe protection, a 30-day plan after
 * losing a job, mental accounting, the true cost of owning a car, and the
 * paperwork that protects a family. Same rules as earlier batches:
 * educational only, jurisdiction-neutral, no tips, every word original.
 */
export const ARTICLES_BATCH5: Article[] = [
  {
    slug: 'insure-the-catastrophe-not-the-inconvenience',
    category: 'saving',
    title: 'Insure the Catastrophe, Not the Inconvenience: A Clear Way to Think About Insurance',
    excerpt:
      'Insurance is a bet you expect to lose on average — which is exactly why it is worth buying for disasters and usually a poor deal for small, affordable mishaps. A simple framework for deciding what to cover and what to carry yourself.',
    date: '2026-10-13',
    minutes: 10,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Few financial products are bought with less thought than insurance. It arrives bundled with a phone, offered at a checkout, required by a landlord or pushed by a salesperson, and most people say yes or no on instinct. Yet insurance decisions quietly shape both how much money leaks away each year and whether a single bad day can undo a decade of careful saving.',
        'There is one idea that makes almost every insurance decision easier, and it fits in a sentence: insure against losses you could not afford, and carry the small ones yourself. This guide explains why that rule works, how to apply it to common situations, and where people most often get it backwards. It is general education, not advice about any specific policy or country, and the right cover always depends on your own circumstances.'] },
      { h: 'Why insurance is a losing bet — on purpose', p: [
        'Start with an uncomfortable truth. An insurer has to collect more in premiums, across all its customers, than it pays out in claims — otherwise it could not cover its staff, its offices, its marketing and its profit. That means the average customer, over time, pays more into insurance than they get back. Insurance is, by design, a bet you expect to lose.',
        'That is not a criticism. It is the price of a genuinely valuable service: turning a small, certain cost into protection against a large, uncertain one. You accept a modest guaranteed loss — the premium — in exchange for never facing a loss that would be ruinous. The trade only makes sense when the loss being avoided is large enough that you could not absorb it. When the potential loss is small, you are paying the insurer’s costs and margin to protect yourself from something you could have handled anyway.'] },
      { h: 'The two questions that decide everything', p: [
        'For any risk, ask two questions. First, how bad would it be if it happened — could you pay for it from savings without serious hardship, or would it mean debt, losing a home or years of financial damage? Second, how likely is it? Plotting risks on those two dimensions gives a surprisingly clear map.',
        'Rare but devastating events — a serious illness, a disabling accident, a house fire, the death of an earner with dependants, a lawsuit after injuring someone — are exactly what insurance exists for. Common but small events — a cracked phone screen, a minor car scrape, a broken kettle — are usually better handled from your own pocket. The awkward middle ground, moderately likely and moderately costly, is where personal judgement and the size of your emergency fund come in.'] },
      { h: 'Your emergency fund is a form of insurance', p: [
        'The reason the rule works is that the small losses do not disappear when you decline cover; they are simply paid from savings instead of from premiums. That is why an emergency fund and an insurance plan belong together. The larger your cash cushion, the more risk you can carry yourself, and the more you can save by declining small-ticket cover and choosing higher deductibles.',
        'Someone with no savings is in a different position. For them, even a moderate unexpected bill can trigger expensive debt, so a little more cover may make sense in the short term. But the long-term goal is the same for everyone: build the cushion, then gradually shift the small risks from the insurer to yourself and keep the difference.'] },
      { h: 'Deductibles: the lever most people ignore', p: [
        'Most policies let you choose a deductible or excess — the amount you pay yourself before the insurer pays anything. A higher deductible means a lower premium, because you are taking on the small claims. People often choose the lowest deductible out of a vague feeling that it is safer, and then pay for that feeling every single year.',
        'Run the numbers on your own policies. If raising the deductible saves a meaningful amount in premium each year, and you could comfortably pay the higher deductible from your emergency fund, the higher deductible usually wins over time — especially if you rarely claim. The money you save stays with you in the years nothing goes wrong, which for most people is most years.'] },
      { h: 'Extended warranties and gadget cover', p: [
        'The checkout offer to “protect your purchase for just a little more” is the clearest example of insuring an inconvenience. The item is usually affordable to repair or replace, many failures happen within the manufacturer’s own warranty period anyway, and the price of the add-on often includes a generous margin for the seller. Over a lifetime of purchases, routinely declining these and setting the money aside tends to leave you well ahead.',
        'There are exceptions — an item that is genuinely expensive relative to your savings, or one that is known to fail often and cost a lot to fix — and it is reasonable to judge those case by case. But the default answer to small-ticket protection plans should be a polite no.'] },
      { h: 'Where the catastrophes actually are', p: [
        'If you have dependants who rely on your income, the loss of that income through death is a catastrophe for them, and life cover sized to their needs is one of the most important financial protections there is. Simple, pure protection policies tend to deliver far more cover per unit of premium than products that mix insurance with savings.',
        'Your ability to earn is usually your largest asset, so a long illness or disability that stops you working can be more financially damaging than death, and is statistically more likely during working life. Depending on where you live and what your employer provides, some form of income protection may be worth investigating. Serious medical costs are the other great catastrophe in many countries, and adequate health cover — through public systems, employers or private policies — is non-negotiable where large bills are possible.'] },
      { h: 'Liability: the risk people forget', p: [
        'Most people think of insurance as protecting their own things. But one of the largest potential losses is what you might owe someone else — after injuring a pedestrian with a car, or after a guest is hurt at your home. Such claims can be enormous and are exactly the kind of rare, devastating event insurance is built for.',
        'Many countries make some liability cover compulsory for drivers precisely because the potential damage is so large. Check what your existing policies include, and whether the limits would genuinely cover a serious claim. Raising a liability limit is often surprisingly cheap relative to the protection it adds.'] },
      { h: 'Read the exclusions before you need them', p: [
        'A policy is only as good as what it actually covers. The headline promise sits at the front; the conditions that decide real claims sit in the definitions and exclusions further back. Waiting periods, pre-existing conditions, maximum payouts on particular items and requirements to report claims promptly all matter.',
        'Spend an hour once with each important policy and write down, in your own words, what it covers, what it does not, and what you must do if you need to claim. That hour is far easier on a calm day than in the middle of a crisis, and it often reveals gaps worth fixing — or duplicate cover worth cancelling.'] },
      { h: 'Be honest on every application', p: [
        'Insurers rely on what you tell them when setting a price, and a claim can be refused if they later find that important facts were left out — a health condition, a past claim, how a car is really used. It can be tempting to shade the truth to save on premiums, but that saving is an illusion if it means the policy fails exactly when it is needed.',
        'Answer every question accurately, keep a copy of what you submitted, and tell the insurer about relevant changes during the policy. A slightly higher premium for honest cover is always better value than a cheaper policy that will not pay.'] },
      { h: 'Review once a year, and after big changes', p: [
        'Insurance needs change as life changes. A new child, a home purchase, a large rise in income or savings, or paying off a mortgage can all shift what you need. A once-a-year review — perhaps at the same time you check your budget or net worth — keeps cover aligned with reality.',
        'Look for three things in that review: catastrophes you are not covered for, small risks you are paying too much to cover, and policies that overlap. Many households discover they are underinsured against the big things and overinsured against the small ones — exactly the reverse of what the rule recommends.'] },
      { h: 'A one-page insurance inventory', p: [
        'Make a simple table with one row per policy: what it covers, the insurer, the policy number, the premium, the deductible, the renewal date, and where the documents are kept. Add a final column for “catastrophe or inconvenience?” and answer it honestly for each line.',
        'The exercise takes less than an hour and almost always produces at least one decision — a limit to raise, a deductible to increase, an add-on to cancel or a gap to close. It also leaves your family with a single page that explains what protection exists if they ever need to use it, which may be the most valuable part of all.'] },
      { h: 'The rule in practice', p: [
        'Insurance is best thought of as part of your safety net, not as a series of separate products. The emergency fund catches the small falls; insurance catches the ones that would otherwise break you. Arranged that way, you pay for protection where it matters and keep your money where it does not.',
        'Insure the catastrophe, not the inconvenience. Build the cushion that lets you carry the small risks, choose deductibles you can afford, read the conditions on a calm day, and answer every question honestly. The result is a household that is both cheaper to run and far harder to knock over.'] },
    ],
  },
  {
    slug: 'lost-your-job-30-day-money-plan',
    category: 'income',
    title: 'Lost Your Job? A Calm 30-Day Money Plan for the First Month',
    excerpt:
      'The first weeks after losing a job are when the most expensive money mistakes are made — in panic, in a hurry, or by doing nothing at all. A step-by-step plan for the first thirty days that protects your cash, your credit and your options.',
    date: '2026-10-13',
    minutes: 11,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Losing a job is one of the most stressful events in adult life, and it rarely arrives at a convenient moment. Alongside the shock and the worry about what comes next, there is a set of urgent money decisions that have to be made within days — often while you are least able to think clearly.',
        'This guide is a calm, step-by-step plan for the first thirty days. It will not find you a new job, and the details of benefits, severance and health cover vary enormously from country to country. But the principles hold almost everywhere: protect your cash, protect your essentials, protect your credit, and keep your options open. Work through it in order, one week at a time.'] },
      { h: 'Days one to three: stop, breathe, gather the facts', p: [
        'The worst financial decisions after a job loss are made in the first forty-eight hours, in a state of panic: cashing out long-term investments, signing a severance agreement without reading it, or announcing to every creditor that you cannot pay. Give yourself a short pause before committing to anything irreversible.',
        'Use those days to gather facts instead. When is your final pay date, and what will it include — unused holiday, notice pay, any bonus owed? Is there a severance offer, and what does it ask you to sign away? Does any workplace benefit, such as health cover, continue for a period? Write the answers down. A clear list turns a fog of anxiety into a set of manageable problems.'] },
      { h: 'Read anything before you sign it', p: [
        'Employers sometimes present a separation or severance agreement with a short deadline. It may include conditions — confidentiality, giving up the right to bring claims, non-compete clauses — that matter a great deal. Ask for the document in writing, ask how long you have to consider it, and read every clause.',
        'If the sums are significant or the terms unclear, a short consultation with an employment adviser or lawyer, or with a union or workers’ advice service where one exists, is often worth far more than it costs. In many places, terms can be negotiated, and the moment before you sign is the moment you have the most leverage.'] },
      { h: 'Claim what you are entitled to, quickly', p: [
        'Many countries offer unemployment benefits or similar support, and many such schemes have deadlines measured in days or weeks, with payments backdated only to the date of application. Find out what applies where you live and apply promptly, even if you hope to find work quickly. There is no virtue in leaving support unclaimed that exists precisely for this situation.',
        'At the same time, check other entitlements: whether health or life cover can be continued, whether there are rules for withdrawing from or keeping workplace retirement savings, and whether any insurance you hold includes cover for loss of employment. Each of these has its own process and its own timeline, so list them and work through them one by one.'] },
      { h: 'Week one: build a survival budget', p: [
        'Your normal budget was built for a salary that has paused. Replace it, for now, with a survival budget that separates spending into three groups. Essentials: housing, utilities, food, insurance, minimum debt payments, transport you genuinely need for job hunting. Important but flexible: phone plans, some subscriptions, children’s activities. Pausable: eating out, new clothes, holidays, most subscriptions.',
        'Cut the third group immediately and trim the second. The aim is not to live miserably forever; it is to stretch your cash for as long as possible while you look for work. Every month your money lasts is a month of choosing a job rather than accepting the first one out of desperation.'] },
      { h: 'Calculate your runway', p: [
        'Add up the cash you can reach without penalty — your emergency fund, your final pay, any severance, expected benefits — and divide it by your monthly survival budget. The result is your runway: roughly how many months you can manage without new income.',
        'Knowing this number changes the emotional weight of the situation. Four months of runway is a very different position from four weeks, and both are better known than guessed. Recalculate it every couple of weeks as the picture becomes clearer, and treat any increase — a cut you managed, a benefit approved — as a genuine win.'] },
      { h: 'Use the emergency fund — that is what it is for', p: [
        'Many people who have dutifully built an emergency fund feel guilty spending it. This is exactly the emergency it was built for. Use it for essentials, without apology, rather than turning to high-interest credit while savings sit untouched.',
        'What you should avoid, if at all possible, is raiding long-term investments and retirement savings early. Depending on where you live, early withdrawals can carry tax costs or penalties, and selling investments in a hurry may mean selling at a bad moment. Use cash first, then other accessible savings, and treat long-term accounts as a last resort after careful thought.'] },
      { h: 'Week two: talk to lenders before you miss a payment', p: [
        'If your runway is short and you have loans, a mortgage or credit card debt, contact your lenders before you fall behind, not after. Many lenders have hardship arrangements — temporary payment reductions, payment holidays, extended terms — but these are far easier to arrange while your record is clean.',
        'Explain briefly and honestly that you have lost your job and are actively looking for work, ask what options exist, and get any agreement in writing. Understand exactly how the arrangement will be reported and what it will cost in extra interest. A temporary arrangement that keeps your account in good standing is almost always better than a string of missed payments.'] },
      { h: 'Do not let high-interest debt fill the gap', p: [
        'It is tempting to keep life feeling normal by putting spending on credit cards or taking an instant loan, telling yourself you will repay it once the new job arrives. The danger is that job searches often take longer than expected, and debt that seemed temporary becomes a lasting burden at high interest.',
        'If you must borrow, choose the cheapest, most transparent option, borrow only for essentials, and keep a running total. Be especially wary of lenders who approve instantly, ask for fees upfront or make promises that sound too good to be true; financial distress is exactly when predatory offers find people.'] },
      { h: 'Weeks three and four: protect your future earnings', p: [
        'Once the immediate money questions are under control, turn to the thing that will end this period: income. Update your CV and professional profiles, list the people in your network who might know of opportunities, and set a weekly routine of applications and conversations. Treat the search as structured work with regular hours, which also protects your mental health.',
        'Consider bridging income too. Short-term contract work, freelancing in your field or part-time work can extend your runway considerably, even if it is not where you want to stay. Check how any such income interacts with benefits you receive, so that you do not create an unexpected repayment later.'] },
      { h: 'Look after the person, not just the budget', p: [
        'Job loss is not only a financial event. It affects identity, confidence, relationships and sleep. Talk to the people close to you — a partner, family, trusted friends — rather than carrying the worry alone. Being open with a partner about the numbers, in particular, prevents the second stress of hidden decisions.',
        'Keep some structure in your days: regular sleep, exercise, time outside, a few fixed tasks. None of this costs money, and all of it makes for better decisions and better interviews. If anxiety or low mood becomes overwhelming, reach out to a health professional; that is a strength, not a failure.'] },
      { h: 'What to do when the new job arrives', p: [
        'When income returns, resist the urge to make up for lost time with spending. First catch up on anything paused, then rebuild the emergency fund — ideally a little larger than before, because you now know exactly what it is for. Restart retirement contributions and any investments you paused.',
        'Finally, write a short note to your future self about what you learned: which costs were easy to cut, which mattered, how long the search took and what helped. That note is the beginning of a better plan for the next time life surprises you, and it turns a painful month into lasting resilience.'] },
      { h: 'A folder for the paperwork', p: [
        'Create one folder, paper or digital, for everything connected with the job loss: the termination letter, final payslip, any severance agreement, benefit applications and reference numbers, letters from lenders and records of every call. Note the date, the name of the person you spoke to and what was agreed.',
        'In a stressful month, details slip. A single folder means you never have to search for a document when a deadline is close, and it gives you solid evidence if a payment goes missing or an agreement is later disputed. It also makes it far easier for a partner or adviser to help you.'] },
      { h: 'The thirty-day plan in brief', p: [
        'Days one to three: pause, gather facts and read before signing anything. Week one: claim entitlements promptly, build a survival budget and calculate your runway. Week two: use your emergency fund, protect long-term savings and talk to lenders before missing a payment. Weeks three and four: avoid high-interest debt, structure your job search and consider bridging income.',
        'Throughout, look after yourself and the people around you. A job loss is a hard chapter, but with clear steps and a calm order of priorities it does not have to become a financial crisis. The aim of these thirty days is simple: keep your options open long enough to choose well.'] },
    ],
  },
  {
    slug: 'mental-accounting-every-dollar-is-the-same',
    category: 'mindset',
    title: 'Mental Accounting: Why a Bonus Feels Different From a Salary — and How to Use That',
    excerpt:
      'Money is perfectly interchangeable, yet our minds sort it into labelled jars: windfalls, refunds, “fun money”, savings. That habit causes some expensive mistakes — and, used deliberately, it can also make good habits almost effortless.',
    date: '2026-10-13',
    minutes: 10,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'In a textbook, money is perfectly interchangeable. A unit of currency from a salary, a birthday gift, a tax refund or a lucky win can buy exactly the same things, so a rational person should treat them identically. In real life almost nobody does. A bonus feels like permission to splurge; a refund feels like found money; a few notes in an old coat pocket feel like a gift from the universe.',
        'The economist Richard Thaler gave this pattern a name — mental accounting — and his work on how people actually make decisions contributed to his Nobel prize in economics in 2017. Understanding it is useful for two reasons. It explains a set of very common and very expensive money mistakes. And, turned around, it is one of the most practical tools there is for building good habits without relying on willpower.'] },
      { h: 'What mental accounting is', p: [
        'Mental accounting describes the way we sort money into separate mental “accounts” according to where it came from or what we intend it for, and then treat each account by different rules. Rent money is sacred; holiday money is for enjoying; money labelled “windfall” is spent more freely than money labelled “earned”.',
        'Those labels exist only in our heads, but they change behaviour a great deal. The same person who carefully compares prices on groceries may spend a surprise refund in an afternoon, simply because it sits in a different mental jar. Neither choice is irrational in isolation; the inconsistency between them is the point.'] },
      { h: 'Mistake one: windfalls that vanish', p: [
        'Money that arrives unexpectedly — a bonus, a refund, an inheritance, a gift — is very often spent faster and less carefully than regular income, because it does not feel like “real” money. Yet a windfall is exactly the same money that could clear a debt, top up an emergency fund or fund a long-term goal.',
        'A simple rule helps: decide in advance what happens to windfalls before they arrive. Many people use a split, such as directing most of any unexpected money to their priorities and keeping a smaller, clearly defined share to enjoy without guilt. The enjoyment is real, and the larger share does lasting work.'] },
      { h: 'Mistake two: saving at low interest while borrowing at high interest', p: [
        'A surprisingly common pattern is holding savings that earn little while carrying credit card or other expensive debt at the same time. The savings sit in one mental account — “safety” or “for the house” — and the debt in another, so they are never compared. In plain arithmetic, the household is paying high interest on borrowed money while earning low interest on its own.',
        'There are good reasons to keep a genuine emergency fund even while paying off debt, because losing access to cash can force even worse borrowing. But beyond that cushion, comparing the two accounts side by side often reveals that using spare savings to clear expensive debt is one of the best guaranteed returns available.'] },
      { h: 'Mistake three: “house money” and gambling with gains', p: [
        'People tend to take bigger risks with money they think of as winnings than with money they think of as their own. An investor who has made a gain may treat it as “the market’s money” and gamble it more casually; someone who wins a prize may spend it on things they would never buy from their salary.',
        'Once money is in your account, it is all yours, whatever its history. A useful habit is to imagine that any gain or windfall had arrived as ordinary salary, and ask whether you would make the same decision with it. If the answer is no, the label is doing the deciding, not you.'] },
      { h: 'Mistake four: cards that soften the pain', p: [
        'Paying with cash is noticeably “painful”: you watch notes leave your hand. Paying with a card, a phone or a one-click checkout separates the moment of buying from the moment of paying, and the pain fades. Many people spend more when payment is effortless, not because they decided to, but because the mental account never registered the loss.',
        'You do not need to return to cash to fix this. Checking a running total of the month’s spending once or twice a week, turning on instant spending notifications, or removing saved cards from shopping apps all reintroduce a little of the useful friction that keeps spending deliberate.'] },
      { h: 'Turning the bias into a tool', p: [
        'The same tendency that causes these mistakes can be used deliberately. If the mind treats labelled money differently, then labelling your money carefully is one of the easiest ways to protect it. Savings with a clear name and purpose — “roof repair”, “Maya’s school fees”, “car replacement” — are far less likely to be raided than a general pool called “savings”.',
        'This is why separate accounts or labelled pots work so well in practice. Many banks let you create several named sub-accounts. Moving money into a pot called “emergency only” makes it feel off-limits in a way a single combined balance never does. You are using mental accounting on purpose, to make the right choice the easy one.'] },
      { h: 'Give every unit of money a job', p: [
        'Some budgeting approaches take this idea to its natural end: every unit of income is assigned a job as soon as it arrives — bills, savings, investments, spending — until nothing is left unassigned. The approach works for many people precisely because it replaces vague intentions with specific mental accounts.',
        'You do not need a complicated system to benefit. Even three labelled destinations — fixed costs, future goals and guilt-free spending — capture most of the advantage. The key is that the labels are chosen in advance, calmly, rather than invented in the moment to justify a purchase.'] },
      { h: 'Watch out for rigid accounts too', p: [
        'Mental accounting can also make people too rigid. Someone may refuse to touch a “holiday fund” in a genuine emergency and borrow at high interest instead, because spending the holiday money feels wrong. Labels should guide choices, not trap you in bad ones.',
        'The fix is a short list of agreed exceptions. Decide in advance that a true emergency — a job loss, a medical bill, an urgent repair — overrides every other label, and that money can be moved between pots when circumstances genuinely change. Flexibility planned in advance is very different from impulse.'] },
      { h: 'A short self-check', p: [
        'Look at your last few months and ask four questions. What happened to the last windfall or refund you received? Are you carrying expensive debt while holding savings that earn little? Do you spend differently with a card than with cash? Are your savings labelled, or do they sit in one undifferentiated pile?',
        'Your answers will show where mental accounting is working against you and where it could work for you. Most people find at least one quick, practical change — a windfall rule, a renamed savings pot, a debt cleared from idle cash — that makes a real difference.'] },
      { h: 'The same saving, counted differently', p: [
        'A classic experiment by the psychologists Daniel Kahneman and Amos Tversky asked people whether they would travel across town to save a fixed small amount on a purchase. Many said yes when the item was cheap, and no when the same saving applied to an expensive item. The money saved was identical; only the comparison changed.',
        'The lesson is that we judge savings in percentages rather than in absolute amounts. That makes us work hard to save a little on small purchases and shrug off far larger amounts hidden inside big ones — the extras on a car, the add-ons to a home renovation, the upgrade on a holiday. When a decision is large, deliberately convert every option into plain currency and ask whether you would accept that sum as a standalone cost.'] },
      { h: 'Sunk costs: the account that refuses to close', p: [
        'Mental accounting also explains why people keep pouring money into something because of what they have already spent: the gym membership that is never used, the car that keeps needing expensive repairs, the course that no longer fits their plans. The past spending sits in an open mental account, and walking away feels like admitting a loss.',
        'But money already spent is gone whatever you decide next. The only useful question is about the future: from today, is continuing worth its cost? Closing a mental account that has turned bad is uncomfortable, and it is often the most valuable financial decision of the year.'] },
      { h: 'Couples and the “mine, yours, ours” accounts', p: [
        'Couples run mental accounts too, often without discussing them: one partner treats a bonus as household money, the other as personal money; one sees a shared account as for bills only, the other as for everything. Many arguments about money are really disagreements about which mental account something belongs in.',
        'Talking about the labels openly — what counts as shared, what counts as personal, how windfalls are split — prevents much of that friction. Many couples find a simple structure of shared accounts for common goals plus a personal allowance each, spent without justification, keeps both fairness and freedom.'] },
      { h: 'In short', p: [
        'Money is interchangeable, but our minds are not neutral about it. We spend windfalls freely, keep savings and debt in separate compartments, take bigger risks with “winnings” and feel less pain paying by card. Each of these quietly costs money.',
        'Used deliberately, the same habit becomes a strength: name your savings, give every unit of income a job, decide windfall rules in advance and agree the exceptions before you need them. You cannot switch off mental accounting, but you can decide which accounts your mind keeps — and let them do the hard work for you.'] },
    ],
  },
  {
    slug: 'true-cost-of-owning-a-car',
    category: 'saving',
    title: 'The True Cost of Owning a Car: The Number the Showroom Never Shows You',
    excerpt:
      'The price on the windscreen is only the beginning. Depreciation, finance, insurance, fuel, maintenance and parking usually add up to far more than people expect — and a few simple decisions can cut that total dramatically.',
    date: '2026-10-13',
    minutes: 11,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'For many households a car is the second-largest purchase after a home, and in some years it quietly costs more than anything else they own. Yet most car decisions are made on two numbers: the sticker price and the monthly payment. Neither tells you what the car will actually cost you.',
        'The useful number is the total cost of ownership: everything you will spend on the car from the day you buy it to the day you sell it, minus what you get back at the end. Once you calculate it, a lot of car decisions become much clearer — which model, new or used, how to pay, and how long to keep it. This guide walks through the pieces. Costs and rules vary widely by country, so treat the framework as universal and fill in your own local numbers.'] },
      { h: 'Depreciation: the biggest cost you never pay directly', p: [
        'A car loses value from the moment it becomes yours, and the loss is usually steepest in the first few years. You never write a cheque for depreciation, which is why it is so easy to ignore, but it is real money: the difference between what you paid and what the car is worth when you sell it.',
        'For a new car, depreciation in the early years is often the single largest cost of ownership, larger than fuel or insurance. That is the core of the financial case for buying a reliable car that is a few years old: the first owner absorbs the steepest part of the decline, and you still get many years of useful life.'] },
      { h: 'Finance: the cost hidden in the monthly payment', p: [
        'Most cars are bought with borrowed money, and the way the deal is presented — as a monthly payment — is designed to make the total feel small. A longer loan lowers the monthly figure but increases the total interest paid, and it raises the risk of owing more than the car is worth for a long stretch.',
        'Before agreeing to any finance, ask for the total amount you will repay over the whole term, including interest and fees, and compare it with the cash price. A widely quoted rule of thumb for keeping car costs sensible is to put down a meaningful deposit, keep the loan short, and keep total transport costs a modest share of income. The exact percentages matter less than the principle: if a car only fits your budget on a very long loan, it probably does not fit your budget.'] },
      { h: 'Insurance, tax and registration', p: [
        'Insurance can vary enormously between models, driver profiles and areas, and it is worth getting quotes before choosing a car, not after. A model that looks affordable can carry a premium that changes the whole calculation, particularly for young drivers or high-performance cars.',
        'Many countries also charge annual road taxes, registration fees or inspections, sometimes linked to engine size, emissions or value. Add them to the total. They are small in any single year and significant over a decade.'] },
      { h: 'Fuel or electricity', p: [
        'Running costs depend on how far you drive, how efficient the car is and what energy costs where you live. A simple estimate is enough: your yearly distance divided by the car’s real-world efficiency, multiplied by your local price for fuel or electricity. Use honest figures for your own driving, not the most optimistic official numbers.',
        'Electric cars change the mix of costs rather than eliminating them. They often cost more to buy, and in many places they are cheaper to run and simpler to maintain, but the balance depends heavily on local electricity prices, charging access, incentives and how much you drive. Compare the full totals for your situation rather than relying on general claims either way.'] },
      { h: 'Maintenance, tyres and repairs', p: [
        'Every car needs servicing, tyres, brakes and occasional repairs, and these costs usually rise as the car ages. Reliability differs a great deal between models, so researching the long-term reliability record of a model is one of the most valuable hours a buyer can spend.',
        'A sensible approach is to set aside a fixed amount every month in a separate “car” pot, so that servicing and repairs are paid from money already saved rather than from a credit card. This is a sinking fund in its simplest form, and it turns surprise repair bills into ordinary expenses.'] },
      { h: 'Parking, tolls and the costs people forget', p: [
        'Parking at home and at work, tolls, congestion charges, cleaning and the occasional fine are easy to leave out of the calculation, and in cities they can be substantial. So can the time cost: hours spent in traffic, looking for parking or dealing with breakdowns.',
        'Include them honestly. For some city households, the true cost of owning a car turns out to be high enough that a combination of public transport, cycling, occasional taxis and short-term rentals is both cheaper and more flexible. For others, especially in rural areas, a car is essential. The point is to choose with the full number in front of you.'] },
      { h: 'The opportunity cost', p: [
        'Money spent on a more expensive car than you need is money that is not working elsewhere. A large monthly payment sustained over many years could instead have built an emergency fund, cleared debt or grown in long-term investments. Over a working life, repeatedly choosing a slightly cheaper car and investing the difference can add up to a surprisingly large sum.',
        'This is not an argument against ever enjoying a nice car. It is an argument for knowing the trade you are making, and making it deliberately rather than because a monthly figure looked manageable in a showroom.'] },
      { h: 'Working out your own total', p: [
        'Take a sheet of paper and estimate, for the years you expect to keep the car: purchase price plus all finance costs, minus the expected resale value; plus insurance, taxes and registration; plus fuel or electricity; plus maintenance, tyres and repairs; plus parking and tolls. Divide the total by the number of years, then by twelve.',
        'That monthly figure is the real cost of the car, and it is usually much larger than the loan payment alone. Doing the same calculation for two or three candidate cars — including a good used option — often makes the decision for you.'] },
      { h: 'Buying used without buying trouble', p: [
        'A used car offers the best value only if it is a good one. Look for a model with a strong reliability record, ask for the full service history, check whether there are outstanding finance agreements or recorded damage where such checks are available, and pay for an independent inspection before committing. The small cost of an inspection is cheap insurance against an expensive mistake.',
        'Be wary of deals that look unusually cheap, sellers who push for a quick decision, and requests for deposits before you have seen the car. The same rules that protect you from scams elsewhere apply here: take your time, verify independently and never pay before you are sure.'] },
      { h: 'Keep it longer', p: [
        'One of the simplest ways to reduce lifetime car costs is to keep each car for longer. Depreciation slows as a car ages, there are no new purchase costs or finance charges, and a well-maintained car can serve reliably for many years. Changing cars frequently means paying the steepest part of the depreciation curve again and again.',
        'There comes a point where repair costs or reliability concerns outweigh the savings, and that point is worth judging honestly. But for many drivers it arrives much later than the advertising suggests.'] },
      { h: 'Leasing: a long rental with conditions', p: [
        'Leasing lets you drive a new car for a fixed monthly payment without owning it, and returning it at the end of the term. It can suit people who want a new car every few years and value predictable costs, and in some business settings it has tax advantages. But it is, in effect, a long rental: you pay for the car’s steepest years of depreciation and own nothing at the end.',
        'Leases also come with conditions that matter: mileage limits with charges for going over, charges for wear and damage beyond what the contract allows, and costs for ending the agreement early. Read those terms as carefully as the monthly figure, and compare the total cost over the lease with buying a reliable used car and keeping it.'] },
      { h: 'Negotiate the price, not the payment', p: [
        'Sellers often steer the conversation towards the monthly payment, because a payment can be made to look affordable by stretching the term, adding a balloon payment at the end or bundling in extras. Keep the discussion on the total price of the car first, then discuss finance separately, and finally any add-ons such as extended warranties or protection packages.',
        'Treat each of those as a separate decision with its own total cost. Many add-ons sold at the desk follow the same logic as other small-ticket protection products: convenient to say yes to, and rarely good value.'] },
      { h: 'In short', p: [
        'The real cost of a car is not the sticker price or the monthly payment but the total cost of ownership: depreciation, finance, insurance, taxes, energy, maintenance, parking and the opportunity cost of the money tied up.',
        'Calculate that total before you buy, compare a good used option with a new one, keep finance short, save monthly for maintenance and keep the car for as long as it serves you well. The car you choose this way may be less exciting in the showroom, and considerably more exciting in your bank balance a few years later.'] },
    ],
  },
  {
    slug: 'wills-beneficiaries-and-the-family-folder',
    category: 'retirement',
    title: 'The Paperwork That Protects Your Family: Wills, Beneficiaries and a Letter of Instruction',
    excerpt:
      'Nobody likes planning for their own death, which is why so many families are left with locked accounts, lost passwords and painful disputes. A practical, jurisdiction-neutral guide to the few documents that make everything easier for the people you leave behind.',
    date: '2026-10-13',
    minutes: 11,
    author: 'The Jai Desk',
    sections: [
      { h: '', p: [
        'Most personal finance is about building something: savings, investments, a home, a retirement. This guide is about what happens to all of it if you are suddenly not there — and about sparing the people you love an exhausting, expensive and sometimes heartbreaking puzzle at the worst moment of their lives.',
        'The documents involved are not glamorous, and the rules governing them differ greatly between countries and even regions. So treat this as a map of the territory rather than legal advice: it explains what each piece does and why it matters, so that you know what to ask a qualified local professional. For most families, a few hours of work now prevents months of difficulty later.'] },
      { h: 'Why this is not only for the old or the wealthy', p: [
        'It is natural to think wills and estate planning are for elderly people with large fortunes. In reality, the people who most need basic paperwork are often younger: parents of small children, couples who are not married, people with a mortgage, and anyone whose family depends on their income.',
        'Without clear instructions, the law of your country decides who inherits, who looks after your children and who has authority over your affairs. Those default rules may be very different from what you would have chosen, and sorting things out can take a long time, during which accounts may be frozen and bills still arrive.'] },
      { h: 'The will: your instructions in legal form', p: [
        'A will sets out who should receive what you own, who should carry out your wishes — usually called an executor — and, crucially for parents, who you would want to care for your children if both parents died. That last point alone is a powerful reason for any parent to make one.',
        'Every jurisdiction has formal requirements for a will to be valid, such as how it is signed and witnessed. A will that misses those requirements may fail entirely. For straightforward situations, simple and affordable options often exist, but for blended families, business owners, property in more than one country or anyone expecting complications, professional advice is well worth its cost.'] },
      { h: 'Beneficiary designations can override a will', p: [
        'Many financial products — life insurance policies, pensions and retirement accounts, some bank and investment accounts — let you name a beneficiary or nominee directly. In many places these designations decide where that money goes, regardless of what your will says. A will written last year does not automatically update a beneficiary form completed fifteen years ago.',
        'This is one of the most common and painful mistakes: an ex-partner still named on a policy, a deceased relative never replaced, or nobody named at all. Make a list of every account and policy that allows a nomination, check who is named on each, and update them after any major life change. It is usually a short form, and it may matter more than any other document you sign.'] },
      { h: 'Nominee is not always the same as owner', p: [
        'In some countries, a nominee on a bank account or investment simply receives the money in order to pass it on according to the will or inheritance law; in others, the nominee becomes the owner. The difference matters, especially in families where relationships are complicated.',
        'Find out how nomination works for each type of account where you live, and make sure your will and your nominations point in the same direction. When they conflict, families end up in exactly the disputes you were trying to prevent.'] },
      { h: 'Powers of attorney: if you are alive but cannot decide', p: [
        'Estate planning is not only about death. An accident or illness can leave someone alive but unable to manage their money or make decisions about their care. Many jurisdictions allow you to appoint, in advance, a trusted person with legal authority to act for you in financial matters, health matters or both.',
        'Without such an arrangement, your family may need to apply to a court or authority for permission to manage your affairs, which can be slow and costly at a time when bills, care costs and decisions are urgent. Ask a local professional what options exist where you live, and choose the person you appoint with great care.'] },
      { h: 'The letter of instruction: the document that helps the most', p: [
        'Alongside the legal documents, one informal document often makes the biggest practical difference: a letter of instruction. It is not legally binding; it is a clear, practical guide for the people who will have to sort things out. It explains where things are and what to do, in plain language.',
        'A good letter lists your bank accounts, investments, pensions, insurance policies and debts, with the institutions and how to contact them; where the original will and important papers are kept; who your lawyer, accountant or adviser is; recurring bills and subscriptions that will need cancelling; and any wishes you have about your funeral. It can also include personal messages, which many families treasure.'] },
      { h: 'Digital life: passwords, devices and accounts', p: [
        'A growing share of our financial lives exists only online: banking apps, investment platforms, digital wallets, email accounts that receive statements, and online subscriptions. If nobody can find or access them, money can sit forgotten, and bills can keep running.',
        'You do not need to write your passwords on a piece of paper in a drawer. A password manager with an emergency-access feature, or instructions on how a trusted person can obtain access, can solve the problem securely. Some online services also let you name a legacy contact. Note in your letter of instruction which approach you have used and how it works.'] },
      { h: 'Where to keep it all', p: [
        'Documents are only useful if they can be found. Keep originals somewhere safe but accessible, and make sure at least one trusted person knows where they are and how to reach them. A locked box that only you can open is not a solution if you are the one who is missing.',
        'Many people keep a single folder — physical, digital or both — containing the will or a note of where it is held, the letter of instruction, a list of accounts and policies, and copies of key documents. Review it once a year, perhaps alongside a net-worth check, and after any major change in your life.'] },
      { h: 'Talking to your family', p: [
        'The hardest part is often not writing the documents but discussing them. Yet a calm conversation now, explaining what you have arranged and why, can prevent misunderstandings, hurt feelings and disputes later. It also gives your family the chance to ask questions while you are there to answer them.',
        'You do not need to share every number. But the people who will act for you should know that the documents exist, where they are, who to call, and what your broad wishes are. Many families find the conversation easier than expected, and a relief once it is done.'] },
      { h: 'A simple order of work', p: [
        'Start with the quick wins: check and update every beneficiary designation, and write the first version of your letter of instruction this week. Then arrange a will, choosing a simple route if your situation is simple and professional advice if it is not. After that, ask about powers of attorney where you live, and set up a secure way for a trusted person to access your digital accounts.',
        'Finally, put everything in one known place and tell the right people where it is. Then set a yearly reminder to review it all, and revisit it immediately after marriage, separation, the birth of a child, a home purchase or the death of someone named in your documents.'] },
      { h: 'Life insurance and the money that arrives first', p: [
        'In the weeks after a death, families often face immediate costs — a funeral, household bills, perhaps a reduced income — while accounts are being sorted out. Life insurance paid to a named beneficiary can often arrive faster than assets that must pass through a formal inheritance process, which is one more reason to keep those nominations current.',
        'It also helps to make sure that a surviving partner has access to some money in their own name or in a joint account. Where every account is in one person’s sole name, the other may have no funds at all for a period. A modest separate cushion avoids that.'] },
      { h: 'Common mistakes worth avoiding', p: [
        'The same errors appear again and again: a will that was never signed properly, an old will that was never updated after a divorce or a new child, beneficiaries who have died or relationships that have ended, documents nobody can find, and a single person in the family who “knows everything” and has never written any of it down.',
        'Each of these is easy to prevent and hard to fix later. A short annual review, a single folder and one honest conversation remove most of the risk.'] },
      { h: 'In short', p: [
        'The documents that protect a family are few: a valid will, up-to-date beneficiary designations, powers of attorney where available, and a practical letter of instruction that explains where everything is and what to do. Together with a plan for your digital accounts and a single known place to keep it all, they turn a potential crisis into a manageable task.',
        'None of this is about expecting the worst. It is an act of care for the people you love, done once and reviewed occasionally. The rules vary by country, so take local advice where it matters — but do not let the complexity become a reason to do nothing. A simple plan in place today is worth far more than a perfect plan that never gets written.'] },
    ],
  },
];
