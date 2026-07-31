import type { Article } from './types';

/**
 * Additive expansions for the jai.lat library.
 *
 * Every entry here APPENDS sections to an existing article. Nothing is
 * removed, nothing is rewritten, and two articles are never merged into one
 * URL. Multiple entries may target the same slug — they apply in order, which
 * is how later top-off passes work.
 */
export interface Expansion {
  slug: string;
  title?: string;
  excerpt?: string;
  sections: Article['sections'];
}

export const EXPANSIONS: Expansion[] = [
  {
    slug: 'pay-yourself-first',
    sections: [
      {
        h: "Choosing the number to start with",
        p: [
          "The most common reason people abandon this system in the first three months is that they set the transfer too high. Enthusiasm at the moment of setting something up is a poor guide to what will feel sustainable in week six, when an unexpected bill lands and the money that would have covered it is already sitting in a savings account you promised yourself you would not touch. The transfer gets reversed, the reversal happens again the following month, and within a quarter the whole arrangement has quietly died.",
          "A better approach is to start deliberately below what you think you can manage. If ten percent feels right, begin at five. The purpose of the first three months is not accumulation, it is proving to yourself that the money leaves and life continues unchanged. Once you have three consecutive months where you did not notice the absence, raise it. Then repeat. People who ratchet upward from a comfortable base almost always end up saving more over a decade than people who start ambitiously and stall.",
          "There is also a diagnostic value in the number that finally starts to pinch. When you reach a percentage where the month genuinely feels tight, you have located the real boundary of your current spending, and that is useful information you cannot get any other way. Most people discover it sits considerably higher than they assumed.",
        ],
      },
      {
        h: "Where the money should actually land",
        p: [
          "Paying yourself first is a timing rule, not a destination rule, and the two get conflated often enough to cause real problems. Moving money out of your current account on payday accomplishes nothing if it lands somewhere you can transfer it back from in thirty seconds using the same app. Friction is doing quiet work in this system, and the amount of friction should match what the money is for.",
          "A sensible default sequence runs roughly like this. The first destination is a plain savings account holding your emergency fund, which needs to be accessible within a day or two because that is the entire point of it. Once that is at a level that would cover several months of essential costs, the ongoing transfer redirects toward longer-term investments, where the friction of selling and waiting for settlement is a feature rather than an inconvenience.",
          "Splitting the transfer across two destinations from the start is also perfectly reasonable and suits people who find the sequential version demotivating. Watching an investment balance appear, even a small one, keeps some people engaged in a way that a slowly filling cash buffer does not. The optimal split matters far less than the transfer existing at all.",
        ],
      },
      {
        h: "What to do when the month genuinely does not work",
        p: [
          "There will be months when the transfer leaves and you then cannot cover something real. This is not a failure of the system and it does not mean you should abandon it. It means one of two things: either the transfer amount is genuinely above your capacity right now, or you hit a one-off expense that any month would have struggled with.",
          "The distinction matters because the responses differ. A one-off should be absorbed by the emergency fund, which is exactly what it exists for, and the transfer should continue unchanged the following month. A structural problem, where three or four consecutive months all fail to work, means the number is wrong and should be lowered without any sense of defeat attached. Lowering a transfer to a level that runs reliably is strictly better than maintaining an aspirational figure you keep reversing.",
          "What you want to avoid is the middle path, where you keep the high number and repeatedly claw it back. That pattern trains you to see the savings account as a slush fund rather than a boundary, and once that association forms it is difficult to undo. The boundary is the asset here, more than the balance.",
        ],
      },
      {
        h: "Why this works when budgeting often does not",
        p: [
          "Detailed budgeting asks you to make dozens of small decisions correctly every month, forever, in the presence of fatigue, social pressure and the ordinary noise of life. It works well for the minority of people who find the tracking itself satisfying, and it fails for nearly everybody else, not because they lack discipline but because the design places an enormous ongoing demand on attention.",
          "Paying yourself first inverts that demand. It asks for one decision, made once, in a calm moment, and then it removes the decision from your life entirely. Everything after that happens by default. Behavioural research on retirement enrolment has found the same pattern repeatedly across very different populations: participation rates change dramatically depending on whether saving is the default or the opt-in, and the difference is far larger than anything education or exhortation produces.",
          "That is the real claim underneath the slogan. It is not that saving first is morally superior to budgeting, it is that a system requiring one decision beats a system requiring three hundred, and the gap between them widens the busier and more tired you are. Systems that survive bad weeks are worth more than systems that are optimal during good ones.",
        ],
      },
      {
        h: "Handling variable and irregular income",
        p: [
          "The standard advice assumes a fixed monthly salary arriving on a predictable date, which describes a shrinking share of working people. Freelancers, commission earners, seasonal workers and anyone running a small business face a version of this problem where the fixed transfer either overshoots in lean months or leaves money idle in good ones.",
          "The adaptation that works is to switch from a fixed amount to a fixed percentage, applied to each payment as it arrives rather than on a calendar date. Every time money comes in, a set share of it moves immediately, before the payment feels like it belongs to you. In a strong month more moves; in a weak month less does. The habit stays intact and the amount flexes automatically.",
          "The second adaptation is to base your baseline spending on something closer to your worst plausible month rather than your average one. This is uncomfortable advice because it means living well below your good months, but the alternative is a structural pattern where good months feel like windfalls and lean months feel like emergencies. Anchoring low converts the good months into surplus rather than into a lifestyle you then cannot sustain.",
        ],
      },
      {
        h: "The part that is not about money",
        p: [
          "After a year or two of this running quietly, most people report a change that has nothing to do with the balance. Money stops occupying the background of their attention in the way it previously did. The recurring low-level question of whether this month will work has been answered in advance, and the mental space that question was consuming becomes available for other things.",
          "This is the return that never appears in a projection, and it arrives long before the numbers become impressive. Knowing that a modest emergency would not become a crisis changes how you approach work, how you respond to a difficult employer, how quickly you feel obliged to accept the first offer that comes along. Those are consequential differences and they compound in their own way.",
          "None of this constitutes financial advice, and none of it requires a high income to begin. The mechanism is entirely about order of operations. Move the money before you can spend it, keep the amount at a level that survives ordinary months, and let a decade pass. The engine underneath is unremarkable, which is precisely why it keeps running.",
        ],
      },
    ],
  },
  {
    slug: 'index-fund-investing-basics',
    sections: [
      {
        h: "What broad diversification actually means in practice",
        p: [
          "The word diversified gets used loosely enough that it is worth being precise about what a broad index fund is doing. A fund tracking a single national market gives you hundreds of companies but leaves you fully exposed to the fortunes of one economy, one currency and one regulatory environment. A fund tracking developed markets globally gives you thousands of companies across dozens of countries, which is a meaningfully different risk profile even though both get described with the same adjective.",
          "The distinction has mattered historically. There have been extended periods, measured in decades rather than years, where one major national market delivered poor returns while others did well. An investor concentrated in the underperformer experienced a very different working life from one who was not, and neither could have known in advance which they would be.",
          "This is the argument for global rather than domestic tracking, and it costs almost nothing to implement since the fee difference between the two is typically trivial. The counterargument, which is not unreasonable, is currency exposure and the fact that your future costs are denominated in your home currency. Both positions are defensible; what is not defensible is holding a single-country fund without having noticed that you made that choice.",
        ],
      },
      {
        h: "Reading a fund document without being an expert",
        p: [
          "Fund literature is dense by regulatory necessity, but the handful of things that actually determine your outcome can be located quickly. The ongoing charges figure, usually expressed as a percentage, is the annual cost and the single most predictive number in the document. Tracking difference, which describes how far the fund drifted from the index it claims to follow, tells you whether the fund is executing competently.",
          "Fund size matters more than people expect. Very small funds are more likely to be closed and merged, which forces a disposal at a moment not of your choosing and can create a tax event. Replication method tells you whether the fund actually holds the underlying shares or achieves its exposure through derivative contracts with a counterparty, which introduces a different category of risk that is worth understanding before accepting.",
          "Finally, check what index is being tracked and read its actual constituent rules. Indices with similar names can have materially different inclusion criteria, weighting schemes and rebalancing frequencies. None of this requires expertise, only fifteen minutes and a willingness to look at the document rather than the marketing page.",
        ],
      },
      {
        h: "The costs that do not appear in the headline fee",
        p: [
          "The ongoing charges figure is the largest cost for most index investors but it is not the only one, and the others are easy to miss because they do not appear as a line item anywhere obvious. Platform fees, charged by whoever holds the account, can exceed the fund fee itself on smaller balances and vary enormously between providers for identical service.",
          "Transaction costs inside the fund, incurred when the index rebalances and the fund must trade to match, are real and are disclosed separately in a place most people never look. The bid-offer spread you pay on each purchase is another, usually small for large funds and less small for niche ones. Currency conversion charges apply if the fund is denominated differently from your account and can be surprisingly steep on some platforms.",
          "Adding these up occasionally is worth doing, because the total is what compounds against you. An investor paying a low headline fee on an expensive platform, converting currency at a poor rate and trading frequently can easily end up with a higher total cost than someone paying a slightly higher fee in an otherwise efficient setup. The headline number is a starting point, not a conclusion.",
        ],
      },
      {
        h: "Why the strategy fails for the people it fails for",
        p: [
          "Index investing has an unusual property: the strategy itself is close to unfalsifiable over long periods, and yet plenty of individual investors using it end up with poor results. The gap is entirely behavioural, and the specific failure modes are well documented and depressingly consistent.",
          "The first is selling during a decline. Every major drawdown produces a wave of investors who exit near the bottom, wait for clarity that never arrives in a legible form, and re-enter well after the recovery. The damage from a single instance of this can exceed a decade of fee savings. The second is performance chasing between funds, where an investor moves from a broad tracker into whatever sector or region has recently done well, converting a diversified position into a concentrated bet at the worst possible moment.",
          "The third and quietest failure is simply stopping contributions during a downturn, which feels prudent and is close to the exact opposite of prudent, since the regular purchase during a decline is the one buying the most for the money. A strategy that requires you to do nothing turns out to be difficult specifically because doing nothing feels like negligence when the news is loud.",
        ],
      },
      {
        h: "What the evidence does and does not establish",
        p: [
          "It is worth being careful about the strength of the claim here, because it is often overstated by enthusiasts in ways that make the underlying case weaker rather than stronger. The evidence robustly establishes that the majority of actively managed funds underperform their relevant benchmark after fees over long periods, and that persistence in outperformance is weak enough to be difficult to distinguish from chance.",
          "What the evidence does not establish is that markets are perfectly efficient, that no manager can ever add value, or that index funds will deliver any particular return going forward. Historical equity returns are the record of one particular sequence of events in a handful of economies over roughly a century, and treating that record as a reliable forecast involves an assumption that deserves to be stated openly rather than assumed.",
          "The honest version of the case is narrower and still compelling: given that you cannot identify outperforming managers in advance, that costs are the one variable you fully control, and that broad diversification reduces the risk of a catastrophic single-company outcome, the low-cost index approach is a rational default rather than a guaranteed one. That distinction matters when markets fall and the guaranteed version of the story stops sounding true.",
        ],
      },
      {
        h: "Setting it up so it survives your future self",
        p: [
          "The practical implementation that most reliably works over decades has three characteristics. It is automatic, so contributions do not depend on remembering or deciding. It is boring enough that checking it frequently offers no entertainment value. And it is difficult enough to change that a bad afternoon does not become a permanent decision.",
          "Some people deliberately choose a platform with a slightly clunky interface for exactly this reason, or avoid installing the app on their phone. This sounds like superstition and is closer to engineering: you are designing a system that will be operated by a version of you who is occasionally frightened, occasionally overconfident, and reading headlines written to provoke both states.",
          "Deciding in advance, in writing, what would cause you to change course is the other half of it. If the answer is a change in your own circumstances rather than a change in the market, you have a plan that can survive a bad decade. If you cannot articulate what would justify a change, you will improvise one under pressure, and improvisation under pressure is where the returns go.",
        ],
      },
    ],
  },
  {
    slug: 'compound-interest-time',
    sections: [
      {
        h: "Why the curve is so hard to picture",
        p: [
          "Human estimation of exponential growth is reliably poor, and this has been demonstrated in enough different experimental settings that it is safe to treat as a general feature rather than a quirk. Asked to sketch how a quantity growing at a steady percentage will look over time, most people draw something close to a straight line with a gentle upward tilt. The actual shape is nothing like that, and the divergence is concentrated at the end.",
          "This matters practically rather than as a curiosity, because it means your intuitive sense of what a savings plan will produce is not just slightly wrong but systematically wrong in one direction. Almost everyone underestimates the later years and overestimates the significance of the early ones, which produces exactly the wrong emotional response: discouragement during the long flat stretch when the balance seems barely to move.",
          "The flat stretch is not a sign that anything is broken. It is what the beginning of the curve looks like from the inside. Understanding that in advance is worth more than any particular calculation, because it inoculates you against quitting during the phase where quitting feels most reasonable.",
        ],
      },
      {
        h: "The point where returns exceed contributions",
        p: [
          "There is a specific and psychologically significant moment in any long compounding plan: the year in which the growth on the existing balance first exceeds the amount you contributed that year. Before that point you are the primary engine of the balance. After it, the balance is. Everything about how the plan feels changes at that crossover.",
          "Where it falls depends on the contribution rate and the return, but for a plan running at typical long-term equity assumptions with steady contributions it tends to arrive somewhere in the second decade rather than the first. This is worth knowing because it sets a realistic expectation for how long the unrewarding phase lasts. It is long. It is not indefinite.",
          "One consequence is that increases to your contribution rate are enormously more valuable early, when contributions dominate, and progressively less decisive later, when growth dominates. Another is that the temptation to reduce contributions arrives most strongly at exactly the point where the balance has started to look substantial, which is when reducing them costs the least in absolute terms and does the most damage to the habit.",
        ],
      },
      {
        h: "What inflation does to the arithmetic",
        p: [
          "Every compounding illustration that quotes a nominal return is describing a number that overstates what you will actually be able to buy. If a plan grows at seven percent while prices rise at three, the meaningful growth is closer to four, and over thirty years the difference between those two figures is not a detail, it is most of the apparent result.",
          "This is the most common way that projections mislead people who are otherwise doing everything right. A figure that looks transformative in nominal terms can be merely adequate in real terms, and a plan built around the nominal number will be badly calibrated. The correction is simple: run every projection using a return net of expected inflation, accept that the resulting figure looks less exciting, and plan against that.",
          "The same correction applies to the rule of 72 mentioned earlier. Dividing 72 by a nominal return gives a nominal doubling time, which is a real thing but not the thing you care about. Dividing by the real return gives the number of years until your money genuinely buys twice as much, which is considerably longer and considerably more useful for planning a life around.",
        ],
      },
      {
        h: "Compounding works against you as well",
        p: [
          "The same curve that builds wealth on the asset side builds obligation on the liability side, and it does so faster because interest rates on consumer borrowing are typically far above realistic investment returns. A balance carried at a high annual rate roughly doubles over a period measured in a small number of years, and doing so silently while you focus on the investment account.",
          "This produces a specific and common error: contributing to investments while carrying expensive short-term debt. The arithmetic here is not close. Clearing a debt at a high rate is a guaranteed return equal to that rate, with no volatility and no uncertainty, which is superior to an uncertain and lower expected return on the investment side. The emotional pull runs the other way because building feels better than clearing, but the numbers are unambiguous.",
          "Fees deserve the same framing. A percentage point of annual cost compounds against you with exactly the mechanics that make the growth curve bend upward, which is why the difference between a cheap and an expensive fund over thirty years is far larger than the annual difference suggests. Anything that takes a percentage each year is running the same engine in reverse.",
        ],
      },
      {
        h: "Why the early-starter comparison needs a caveat",
        p: [
          "The illustration of two savers, where the one who invests for ten early years beats the one who invests for thirty later years, is genuinely instructive and it is also constructed to make a point. It assumes a constant return, no interruptions, no withdrawals and a specific gap between the two start dates. Change any of those and the crossover shifts.",
          "The reason to say this plainly is that the comparison is sometimes deployed in a way that leaves late starters feeling the situation is hopeless, which is both untrue and counterproductive. Someone beginning at forty still has a compounding period measured in decades if they include the years after they stop working, during which the balance continues to grow. The curve is less dramatic but it is the same curve.",
          "The correct takeaway is directional rather than quantitative. Earlier is better, delay is expensive, and the cost of delay is larger than intuition suggests. It is not that a particular start date is a cliff edge beyond which the exercise becomes pointless. Every year you begin is better than the year after it, which remains true at any age.",
        ],
      },
      {
        h: "How to keep the engine running for thirty years",
        p: [
          "The mechanical requirements of compounding are trivial and the durational requirements are the entire challenge. Nobody fails at compounding because the maths defeated them. They fail because a plan ran for six years and then a job change interrupted the standing order, or a market decline prompted a pause that became permanent, or a series of reasonable-seeming withdrawals hollowed out the base that the later growth was supposed to build on.",
          "The defences are unglamorous. Keep the contribution automatic and tied to a payment date rather than a decision. Separate the long-term account from the money you might reasonably need, so that a genuine emergency does not force a withdrawal from the thing that most needs to be left alone. Review annually rather than monthly, since more frequent checking produces more opportunities to interfere without producing better decisions.",
          "And accept that the plan will look unimpressive for a long time. The years where the balance barely moves are not wasted years; they are the base that the later curve is standing on. Nothing about this is a promise, since real returns vary and no particular outcome is guaranteed, but the structure of the thing rewards persistence far more than it rewards cleverness, and persistence is available to anyone willing to be bored.",
        ],
      },
    ],
  },
  {
    slug: 'lifestyle-inflation',
    sections: [
      {
        h: "The upgrades that are genuinely permanent",
        p: [
          "Not every increase in spending is lifestyle inflation in the damaging sense, and treating all of them as equivalent leads to a joyless and eventually unsustainable relationship with money. Some upgrades change your baseline circumstances in ways that do not fade: moving from an unsafe area to a safe one, ending a punishing commute, resolving a chronic health issue, or moving out of accommodation that was making you ill.",
          "These are worth paying for and they do not follow the pattern described earlier, because the thing they removed was a persistent negative rather than a novelty. Adaptation works powerfully on new pleasures and much less powerfully on removed irritations. The absence of a ninety-minute daily commute does not stop feeling good in the way that a nicer car does.",
          "The distinction is a useful filter when evaluating a potential upgrade. Ask whether the thing removes an ongoing source of friction or adds a new source of pleasure. The first category tends to justify its cost indefinitely. The second tends to be worth roughly six weeks of elevated satisfaction followed by a permanent bill.",
        ],
      },
      {
        h: "Why fixed commitments are the dangerous kind",
        p: [
          "Increases in discretionary spending are reversible. If you have been eating out more often, you can eat out less often, and the adjustment takes a week. Increases in contracted or fixed spending are a different category, because they cannot be reduced without a substantial disruption, and they are precisely the upgrades that raises tend to fund.",
          "A larger home, a car on a multi-year finance agreement, a school commitment, an insurance product with surrender penalties: each of these converts a flexible income into an obligated one. The visible effect is a higher monthly cost. The invisible and more consequential effect is a reduction in your ability to respond to change, whether that change is a lost job, a health event or an opportunity that requires a period of lower income.",
          "This is why the same amount of lifestyle inflation can be either mildly costly or genuinely trapping depending on its structure. Someone spending an extra sum each month on flexible things is a decision away from redirecting it. Someone whose extra spending is locked into three contracts has effectively sold a portion of their future optionality, usually without noticing that was the trade.",
        ],
      },
      {
        h: "The social mechanism nobody talks about",
        p: [
          "Lifestyle inflation is described as an individual psychological failing far more often than it is described as what it usually is: a response to a changed peer group. Promotions and raises tend to move people into new social contexts, and those contexts carry norms about what is ordinary. The spending increase frequently follows the norm rather than the desire.",
          "This is worth naming because the standard advice, which amounts to being more intentional, does not address the mechanism at all. If everyone you now spend time with regards a certain type of holiday, car or restaurant as unremarkable, resisting that requires either a willingness to be visibly different or a deliberate effort to maintain relationships outside that context. Both are possible and neither happens by accident.",
          "The people who seem effortlessly immune to lifestyle inflation usually turn out, on inspection, to have maintained a social circle whose norms did not move when their income did. That is a structural advantage rather than a character trait, and it can be constructed deliberately by anyone who understands that it is doing the work.",
        ],
      },
      {
        h: "Making the split rule actually work",
        p: [
          "The recommendation to direct half of any raise to savings is sound and it fails in practice for a specific and avoidable reason: it is applied to the headline figure rather than the net figure. A raise announced as one amount arrives as considerably less after tax and other deductions, and a rule calibrated on the announced number will overshoot, produce a tight month, and get abandoned.",
          "The fix is to wait for the first payslip that reflects the change, calculate the actual increase in what lands in your account, and set the transfer against that. This takes one month and removes the most common failure mode entirely. The second refinement is to set the increased transfer up on the same day the new salary first arrives, before you have experienced a single month of the higher amount as spendable.",
          "Timing matters more here than the percentage does. A modest increase captured immediately is worth more than an ambitious one implemented three months later, because by month three the money has already been absorbed into your baseline and reclaiming it feels like a cut rather than a non-event. The window where the raise is still psychologically new is short.",
        ],
      },
      {
        h: "What high earners get wrong specifically",
        p: [
          "There is a version of this problem particular to high incomes, and it is not simply the same problem at a larger scale. Above a certain level, the individual purchases that drive spending increases stop being obviously extravagant. Each one is defensible in isolation, related to work, or framed as an investment in something. The aggregate is nonetheless a savings rate indistinguishable from someone earning a third as much.",
          "The other feature is that high incomes create a sense of security that substitutes for actual security. If a large sum arrives every month, the absence of an emergency fund feels theoretical rather than urgent, right up until the income stops. High earners are disproportionately exposed to income shocks in some fields, and the combination of a high burn rate with a thin buffer is a well-documented route to financial distress at income levels that sound impossible to get into difficulty at.",
          "The corrective is the same one applied to any income: measure the gap between earning and spending rather than the earning, and treat that gap as the number that describes your financial position. A large income with a small gap is a comfortable present and a fragile future, which is not what most people think they are buying.",
        ],
      },
      {
        h: "The version of this that is worth keeping",
        p: [
          "It would be a poor outcome if the conclusion drawn here were that spending is a failure and every raise should disappear into an account. Money that is never converted into anything is not obviously serving a purpose either, and a plan that requires permanent self-denial tends to break dramatically rather than gradually.",
          "The version worth keeping is asymmetric rather than absolute. Let spending rise, but slower than income, so that the gap widens over a career rather than staying flat. Direct the increases toward the small number of things that genuinely matter to you, which for most people is a shorter list than their actual spending implies. And keep the fixed portion of your costs low enough that a bad year is survivable without dismantling anything.",
          "Done this way, each raise produces both a visible improvement in daily life and a real increase in security, which is the outcome people assume they are getting from a raise and usually are not. None of this is financial advice, and the right balance differs by circumstance, but the principle holds regardless of the numbers involved: the gap is the thing, and the gap is a decision.",
        ],
      },
      {
        h: "A yearly review that takes twenty minutes",
        p: [
          "The practical way to keep this from drifting is an annual comparison of two numbers: what you earned this year and what you spent. Not a categorised breakdown, not a budget, just the two totals and the gap between them, written down somewhere you will find it next year. Most people have never calculated this and are surprised by it the first time.",
          "Comparing this year to last year is where the information is. If income rose ten percent and the gap did not widen, lifestyle inflation absorbed the entire raise, and you now know that in a way that no amount of general intention would have revealed. If the gap widened by less than half the raise, you know the split rule is leaking somewhere and can go looking for where.",
          "Doing this once a year rather than monthly is deliberate. Monthly tracking produces noise and a great deal of effort for information you cannot act on. An annual figure captures the trend that actually determines where you end up, costs almost nothing to produce, and is difficult to argue with. Twenty minutes in the same week each year is enough to keep a decade honest.",
        ],
      },
    ],
  },
  {
    slug: 'pay-yourself-first',
    sections: [
      {
        h: "What this looks like after five years",
        p: [
          "The trajectory people report is fairly consistent. The first year is unremarkable and occasionally frustrating, since the balance is small and the transfer is the most noticeable thing about it. The second and third years are where the emergency fund reaches a level that changes how ordinary problems feel. By the fifth year the investment portion has usually experienced at least one meaningful decline, which is its own education.",
          "What tends to surprise people is how little they remember about the spending they gave up. The specific purchases that the transfer displaced are almost never recalled, because they were the marginal ones by definition, the things that would have been bought on autopilot rather than chosen. Five years of those, converted into a balance, is a strange and instructive trade to look back on.",
          "The other common report is that the transfer amount, set nervously at the beginning, now looks conservative. This is partly income growth and partly the fact that the baseline adjusted permanently and quietly. Whichever it is, the appropriate response is the same one that has applied at every stage: raise it a little, wait three months, and see whether anything actually changed.",
        ],
      },
    ],
  },
  {
    slug: 'index-fund-investing-basics',
    sections: [
      {
        h: "How this fits with everything else you own",
        p: [
          "An index fund is a component rather than a plan, and treating it as the whole plan is a common error among people who have correctly absorbed the argument for it. The fund describes what you own inside one account. It says nothing about how much cash you hold, what debts you carry, how exposed your income is to the same economy your investments track, or what happens if you need money in three years.",
          "That last point deserves emphasis, because the entire case for equity index investing rests on a long holding period, and money you might need within a few years does not have one. Mixing time horizons inside a single account is how people end up selling equities during a decline for reasons that have nothing to do with the market and everything to do with a boiler failing.",
          "The uncomfortable overlap is employment. If your job, your pension and your investments are all tied to the same national economy and in some cases the same sector, you are considerably less diversified than the fund document suggests. Broadening geographically is one response to this, and simply being aware of the concentration is a reasonable start.",
        ],
      },
    ],
  },
  {
    slug: 'compound-interest-time',
    sections: [
      {
        h: "The uncomfortable question about sequence",
        p: [
          "Compounding illustrations use a single average return applied evenly to every year, which is a legitimate simplification for explaining the mechanism and a misleading one for planning against. Real returns arrive in an order, and the order matters enormously once you are drawing money out rather than putting it in.",
          "During the accumulation phase, a bad decade early is survivable and can even be helpful, since your contributions are buying at depressed prices and the recovery applies to a larger holding. The same bad decade arriving in the first years after you stop contributing and start withdrawing is a different problem entirely, because withdrawals lock in the losses and the recovery applies to a permanently smaller base.",
          "This means the curve described here is a good model of one half of a financial life and a poor model of the other. The transition between those halves is where most of the genuinely difficult planning sits, and it is worth knowing that the transition exists long before you reach it, because the decisions that make it manageable are taken in the years before, not during.",
        ],
      },
    ],
  },
  {
    slug: 'diversification-explained',
    sections: [
      {
        h: "The number that describes whether it is working",
        p: [
          "Diversification depends on holdings that do not move in lockstep, and there is a standard way of measuring that relationship. Two assets that rise and fall together in near-perfect step offer almost no diversification benefit no matter how many of them you own. Two that move independently, or in opposite directions, offer a great deal. Everything useful about a portfolio structure comes down to this.",
          "The practical implication is that counting your holdings tells you very little. An investor holding twenty technology companies has twenty positions and roughly one exposure, because those companies respond to the same interest rate environment, the same regulatory pressures and the same broad sentiment. An investor holding four genuinely different asset types has fewer positions and considerably more diversification.",
          "This is why the useful question is not how many things do I own but what would have to happen for most of these to fall at once. If the answer is a single identifiable event, the portfolio is concentrated regardless of how long the holdings list is. If the answer requires several unrelated things to go wrong simultaneously, the structure is doing its job.",
        ],
      },
      {
        h: "Why correlations rise exactly when you need them low",
        p: [
          "There is an uncomfortable and well-documented pattern in market crises: assets that behaved independently for years tend to fall together during severe stress. The diversification that looked robust in calm conditions partially evaporates at the moment it was most needed, which is a genuine limitation rather than a technicality.",
          "The mechanism is not mysterious. In a serious liquidity event, investors sell what they can rather than what they want to, which pushes down prices across unrelated assets simultaneously. Leveraged positions being unwound produce the same effect. The result is that broad declines are usually broader than the underlying economics would justify.",
          "This does not invalidate diversification, since the alternative concentrated position would have done considerably worse in most such episodes. What it does mean is that the benefit is smaller in the worst moments than a long calm period would lead you to expect, and any plan that assumes otherwise is calibrated on the wrong scenario. Holding some cash is the only reliable defence against the everything-falls case, which is one of several reasons the emergency fund sits underneath the portfolio rather than inside it.",
        ],
      },
      {
        h: "The point where adding more stops helping",
        p: [
          "Diversification exhibits sharply diminishing returns, which is worth knowing because it prevents an expensive form of over-engineering. Moving from one holding to ten removes an enormous amount of company-specific risk. Moving from ten to a hundred removes considerably less. Moving from a broad global fund to a broad global fund plus eleven regional and thematic funds usually removes nothing at all while adding cost and complexity.",
          "What remains after the specific risk has been diversified away is market risk, and no amount of additional holdings within the same asset class touches it. This is the part that cannot be diversified out, and it is precisely the part you are being compensated for bearing. A portfolio with all specific risk removed and all market risk retained is, in a rough sense, the structural goal.",
          "The practical consequence is that most retail portfolios are more complicated than they need to be. Multiple overlapping funds frequently hold the same underlying companies at different weights, producing an illusion of diversification, real additional costs and a portfolio that is difficult to assess. Simplification is usually an improvement rather than a compromise.",
        ],
      },
      {
        h: "Diversifying the things that are not investments",
        p: [
          "The single largest financial asset most working people have is not in any account. It is the present value of their future earnings, and it is entirely undiversified: one employer, one industry, one skill set, one economy. Compared to that concentration, the composition of the investment portfolio is a secondary consideration.",
          "This reframes some decisions. Someone whose employment is closely tied to a particular sector has a strong argument for underweighting that same sector in their investments, and a very strong argument against holding a large position in their own employer, which stacks employment risk and investment risk in the same place. That arrangement has ruined people repeatedly and the mechanism is entirely predictable each time.",
          "It also suggests that investment in skills, professional networks and secondary income capability is a form of diversification with a plausible claim to higher returns than anything in the portfolio, particularly early in a career. The financial industry has no product to sell for this, which is roughly why it is discussed less than fund selection despite mattering more.",
        ],
      },
      {
        h: "The rebalancing question",
        p: [
          "A diversified portfolio does not stay diversified on its own. Whichever component performs best grows as a share of the total, so a portfolio left alone for a decade will have drifted toward whatever recently did well, which is usually the opposite of what you want. Rebalancing is the periodic sale of the risen portion to restore the intended proportions.",
          "The uncomfortable part is that this requires selling what has been performing and buying what has not, which every instinct resists. That resistance is roughly why rebalancing works: it enforces a contrarian discipline mechanically rather than relying on you to feel like acting against momentum.",
          "How often to do it matters less than people assume. Annual rebalancing, or rebalancing when a component drifts beyond a set threshold, both work adequately, and doing it more frequently increases costs without improving results. In taxable accounts, rebalancing by directing new contributions toward the underweight component avoids realising gains and is generally preferable to selling. As with everything here, this is educational rather than advice, and specifics depend on circumstances.",
        ],
      },
      {
        h: "What diversification cannot buy you",
        p: [
          "There is a category of expectation that diversification consistently disappoints, and it is worth stating plainly to prevent the disappointment being mistaken for failure. It will not produce the highest return in any given period, by construction, since the highest return in any period belongs to whoever concentrated correctly. Looking back at a strong year, a diversified investor will always be able to identify the bet they should have made.",
          "It will not prevent losses in a broad downturn, will not protect against a general rise in prices eroding purchasing power across all assets simultaneously, and will not make a poorly funded plan adequate. It addresses one specific risk, the risk that any individual holding fails, and it addresses that one extremely well.",
          "The reason it is nonetheless described as the only free lunch is the narrowness of the claim rather than its size. Almost every other improvement in a portfolio requires accepting something worse in exchange. This one, within its limits, does not. That is unusual enough to be worth taking, provided nobody expects it to do a job it never claimed.",
        ],
      },
      {
        h: "A structure that survives contact with reality",
        p: [
          "Pulled together, a workable arrangement for most people is unremarkable. Cash sufficient to absorb ordinary emergencies, held separately and not invested. A broad global equity holding as the growth engine, chosen primarily on cost. Some allocation to more stable assets, sized according to how much decline you can tolerate without acting, which is a lower figure than most people estimate before experiencing one.",
          "Then a review interval long enough that you are not tempted to fiddle, a written note explaining why the structure is what it is, and the discipline to change it only when your circumstances change rather than when the market does. The whole thing fits on an index card and is considerably more robust than most portfolios ten times as complicated.",
          "Diversification is not a strategy in itself so much as a property that a sensible structure has. If your portfolio would survive any single company, sector or country doing badly for a decade, you have it. If it would not, you know exactly what to fix, and the fix is usually simpler and cheaper than whatever you were considering instead.",
        ],
      },
    ],
  },
  {
    slug: 'emergency-fund-first',
    sections: [
      {
        h: "Working out your actual essential number",
        p: [
          "The three-to-six-months guidance is only useful once you know what a month costs, and the figure most people quote when asked is their normal spending rather than their essential spending. Those are very different numbers, and using the wrong one produces either an intimidating target that never gets started or a buffer that turns out to be too thin.",
          "The exercise worth doing once is to go through three months of bank statements and mark each recurring item as either essential, meaning you would still be paying it in a month with no income, or discretionary. Housing, utilities, food, insurance, transport to work, minimum debt payments and any care costs are essential. Most subscriptions, most eating out, most of what people assume is fixed turns out not to be.",
          "The essential figure is typically considerably lower than expected, which makes the target far less daunting than the initial estimate suggested. It also produces a second, separately useful piece of information: the gap between essential and actual spending is the amount you could cut in a genuine crisis, and knowing that number in advance is worth having.",
        ],
      },
      {
        h: "Three or six, and why the answer is about your income",
        p: [
          "The range exists because the right answer depends entirely on how quickly you could replace your income, which varies enormously by circumstance. A worker in a field with constant demand, in a two-income household, with a notice period and redundancy entitlement, faces a very different exposure from a sole earner in a specialised role in a shrinking sector.",
          "The useful way to size it is to ask how long a job search realistically takes in your field, then add a margin. Senior and specialised roles usually take longer to replace, not shorter, which surprises people who assume seniority is protective. Self-employment introduces both a longer recovery and no notice period, which is why the guidance points higher.",
          "There is also a household-level consideration that gets missed. Two incomes in the same industry or the same employer are one income for risk purposes, and a household in that position should size its buffer as though it had a single income stream, because in the scenario that matters it does.",
        ],
      },
      {
        h: "The debt question that comes first",
        p: [
          "There is a genuine tension between building an emergency fund and clearing high-interest debt, and the standard advice to do the buffer first is a simplification that deserves examination. Money sitting in a savings account earning a modest rate while a balance compounds against you at a much higher one is losing ground every month.",
          "The common resolution, and it is a reasonable one, is a two-stage approach: build a small initial buffer, enough to absorb the ordinary surprises that would otherwise send you back to the credit card, then direct everything else at the expensive debt until it is gone, then return and build the full fund. This captures most of the protective benefit of a buffer while not leaving a high-rate balance running for years.",
          "The size of that initial buffer is a judgement call. It needs to be large enough to cover the class of emergency that actually happens frequently, which is car repairs, appliance failures and unexpected bills rather than job loss. Job loss is what the full fund is for, and it is a later-stage problem.",
        ],
      },
      {
        h: "Deciding in advance what counts as an emergency",
        p: [
          "The most common way an emergency fund fails is not that it was never built but that it was gradually spent on things that were not emergencies. This happens by degrees and each individual withdrawal seems defensible at the time, which is exactly why writing the definition down before the fund exists is worth the ten minutes.",
          "A workable definition has three parts: the expense is unexpected, it is necessary, and it is urgent. A car repair that prevents you getting to work meets all three. A holiday booked at short notice meets none, however good the deal. A large but foreseeable annual bill fails the first test and belongs in a separate sinking fund, which is a different mechanism for a different job.",
          "Writing this down does not make you follow it, but it converts a vague feeling into an explicit decision you have to override consciously. That is usually enough friction to stop the gradual erosion, which is the failure mode that matters, since a fund spent slowly on non-emergencies is unavailable for the real one.",
        ],
      },
      {
        h: "Rebuilding after you have used it",
        p: [
          "Using the fund is the system working correctly, and it is worth saying because a surprising number of people experience it as a setback and lose motivation afterwards. The account existed precisely so that this event could be absorbed without debt, and it did that. The correct emotional response is closer to relief than to failure.",
          "What matters next is the rebuild, and it should start immediately at whatever rate is sustainable rather than waiting for a convenient moment. The convenient moment does not arrive, and a fund left depleted tends to stay depleted until the next emergency finds it empty. Restarting the standing order the same week is the single most effective habit here.",
          "It is also worth reviewing whether the target was right. If the fund was fully drained by an event you would describe as ordinary rather than catastrophic, the target was too low for your circumstances, and the rebuild should aim higher. Each use of the fund is information about how well it was sized.",
        ],
      },
      {
        h: "The interest rate question that matters less than it seems",
        p: [
          "A great deal of energy gets spent on optimising the rate on emergency savings, and the effort is largely misdirected. On a buffer of typical size, the difference between a competitive rate and a poor one is real but modest in absolute terms, and it is dwarfed by whether the fund exists at all and whether it is available when needed.",
          "That said, leaving a buffer in an account paying close to nothing when better options exist is an avoidable loss, and switching takes an afternoon. The correct amount of attention is roughly one review per year, checking that the account has not quietly become uncompetitive, which providers rely on people never doing.",
          "What is not worth doing is chasing rate at the cost of access. Accounts with notice periods, withdrawal limits or bonus rates conditional on not withdrawing are all trading away the one property that makes the fund useful. Growth is not this account's job; the investments handle that. This one has exactly one function and it should be optimised for that function alone.",
        ],
      },
      {
        h: "Why this account changes decisions elsewhere",
        p: [
          "The strongest argument for the emergency fund is not the arithmetic of avoided interest, substantial though that is. It is what having one does to every other financial decision you make, and this is difficult to appreciate until you have had one for a while.",
          "With a buffer in place, a market decline is an abstraction rather than a threat, because nothing forces you to sell. A difficult employer becomes a situation with options. An unexpected opportunity that requires a gap in income becomes considerable rather than impossible. Insurance excesses can be set higher, lowering premiums, because you can absorb the excess. Each of these is a small improvement and they compound.",
          "Without one, every other part of the plan operates under a constraint that has nothing to do with its own merits. Investments get sold at the wrong time for reasons unrelated to investing. Debt gets taken at bad rates because the alternative is worse. The buffer is not the exciting part of a financial plan and it is the part that determines whether the exciting parts are allowed to work as designed.",
        ],
      },
      {
        h: "Common structures that quietly do not work",
        p: [
          "A few arrangements come up repeatedly and share a common flaw: they look like an emergency fund on a balance sheet while failing the access test that defines one. An unused credit limit is the most frequent. It feels like a buffer and it is a debt facility that a lender can reduce or withdraw, and lenders have historically done exactly that during the broad economic stress that also causes job losses.",
          "Holding the buffer in investments is the second, and the problem is timing rather than principle. The scenarios that produce personal emergencies correlate with the scenarios that depress markets, so the fund is most likely to be needed at the moment it is worth least. Selling into a decline to cover a boiler is precisely the sequence the fund existed to prevent.",
          "The third is keeping it in the current account, where it is technically present and functionally invisible. Money in the account you spend from does not read as a reserve; it reads as available balance, and it gets absorbed over a year or two without any decision ever being made. Physical separation at a different institution is doing real work, and it costs nothing.",
        ],
      },
    ],
  },
  {
    slug: 'diversification-explained',
    sections: [
      {
        h: "A note on what the free lunch costs in practice",
        p: [
          "The phrase implies that diversification is costless, and in the theoretical framing where it originates that is close to accurate. In practice it carries a cost that is psychological rather than financial, and underestimating it explains why so many people who understand the argument still end up concentrated.",
          "The cost is that a diversified portfolio is permanently mediocre relative to whatever is currently doing well. There is always a sector, a region or an individual holding outperforming your blended result, and you will read about it constantly. Sustaining a structure that is never the best-performing thing you could point to requires a tolerance for that comparison, maintained over decades, in an information environment designed to make it uncomfortable.",
          "Recognising this as the actual price is useful, because it identifies what you are really being asked to supply. Not analysis, not timing, not any particular knowledge, but a willingness to be reliably unremarkable in exchange for a substantially reduced chance of being ruined. Framed that way, it remains a good trade, and it also stops being free.",
        ],
      },
    ],
  },
  {
    slug: 'good-debt-bad-debt',
    sections: [
      {
        h: "Where the simple categories break down",
        p: [
          "The two-category framework is a good starting filter and it fails at the edges in ways worth knowing about, because the edges are where most real borrowing decisions actually sit. Education is the clearest example. It appears in every list of good debt, and whether it deserves that placement depends entirely on the specific course, the specific institution, the specific field and the amount borrowed. The same qualification at the same price can be an excellent investment for one person and a lasting burden for another.",
          "Property has the same problem. A mortgage on a home you can comfortably afford in a stable market is the canonical good debt. The identical instrument, stretched to the limit of what a lender will permit, in a market that subsequently falls, is how people end up unable to move for a decade. The category did not change; the margin of safety did.",
          "This suggests the framework should be applied to the specific transaction rather than the asset class. The useful question is not whether mortgages are good debt but whether this mortgage, at this size, at this rate, against this income, is a sensible position to hold for twenty years including the bad years.",
        ],
      },
      {
        h: "The repayment stress test worth running",
        p: [
          "Every borrowing decision is made under a particular set of conditions, and the loan then persists through conditions that were not anticipated. The single most useful exercise before signing anything is to run the repayment against a deliberately unfavourable version of the future and see whether it still works.",
          "Three variables cover most of it. What happens to this repayment if the interest rate rises substantially from here, which for variable-rate borrowing is a real and recurring event rather than a hypothetical. What happens if household income drops by a third, whether through job loss, a health event or one earner stepping back. And what happens if a large unplanned expense lands in the same year.",
          "A loan that survives all three is genuinely affordable. A loan that survives none of them is not affordable, however comfortably it fits the current month. Most lending assessments test some version of this, but they test it against the lender's risk tolerance rather than yours, and the two are not the same thing. Doing your own version takes twenty minutes and occasionally changes the decision entirely.",
        ],
      },
      {
        h: "Reading the terms that are not the headline rate",
        p: [
          "The advertised interest rate is the most visible term and frequently not the most consequential one. A handful of others determine how a loan behaves when circumstances change, which is when the terms start to matter.",
          "Whether the rate is fixed or variable, and for how long, decides who bears the risk of rates moving. Early repayment charges determine whether you can clear the debt if your position improves, and some are steep enough to trap borrowers in expensive arrangements for years. The presence of a promotional rate that reverts to a much higher one on a specific date has caught out an enormous number of people who intended to refinance before it happened and did not.",
          "Fees added to the principal rather than paid upfront quietly increase the amount you are borrowing and the interest you pay on it. Any charge expressed as a percentage of the balance behaves like an additional interest rate. None of this is hidden, exactly, but it is distributed across a document written to be complied with rather than read, and locating it requires deliberately looking rather than skimming.",
        ],
      },
      {
        h: "The order in which to clear multiple debts",
        p: [
          "Someone holding several debts at once faces a sequencing decision, and there are two established approaches that reach different answers. Paying highest interest rate first minimises total interest paid and is arithmetically optimal. Paying smallest balance first clears individual debts faster, producing visible progress and a shorter list, which sustains motivation.",
          "The evidence on which works better in practice is more mixed than the arithmetic suggests, because completion rates matter as much as efficiency. A strategy that is slightly suboptimal and gets finished beats an optimal one that gets abandoned in month eight. People who respond well to visible milestones frequently do better with the smaller-balance approach despite paying somewhat more in total.",
          "There is a reasonable hybrid: clear anything small enough to be eliminated within a month or two, which removes clutter and reduces the number of payments to track, then switch to strict highest-rate order for the remainder. This captures most of the motivational benefit and most of the efficiency, and it avoids the situation where a genuinely expensive balance sits untouched for a year because it happened to be large.",
        ],
      },
      {
        h: "Debt that is neither good nor bad but merely expensive to ignore",
        p: [
          "A third category exists that the two-way split does not accommodate well: borrowing that arose from circumstance rather than choice. Medical costs, a period of unemployment, a relationship ending, a family obligation. These were not decisions in any meaningful sense and applying a framework designed for evaluating choices produces nothing useful except guilt.",
          "The relevant question for this category is not whether it should have happened but what it costs now and how quickly it can be dealt with. Debt of this kind frequently carries the worst terms available, because it was taken under pressure from whoever would lend, which means it usually deserves priority regardless of size.",
          "It is worth separating this out explicitly because the moralised language around good and bad debt discourages people in this position from engaging with the numbers at all. The arithmetic does not care how a balance arose. A high rate compounds identically whether the borrowing was foolish or unavoidable, and the response is the same: understand the terms, prioritise by rate, and see whether refinancing at a lower rate is available.",
        ],
      },
      {
        h: "When paying off early is not the right answer",
        p: [
          "The guidance to clear debt whose rate exceeds your expected investment return is sound and it has boundaries. A low-rate long-term loan taken years ago may sit well below both current rates and plausible returns, in which case accelerating repayment is a choice to accept a low guaranteed return over a higher uncertain one. That is defensible on peace-of-mind grounds and it is not the arithmetically strongest option.",
          "There are also situations where liquidity matters more than the interest saved. Directing every spare pound at a mortgage while holding no emergency fund converts accessible money into home equity, which is among the least accessible assets there is. If a job loss then arrives, you have a smaller debt and no way to pay it, which is a worse position than a slightly larger debt and cash in an account.",
          "The general principle is that debt reduction competes with other uses of the same money and should be assessed against them rather than treated as automatically virtuous. Expensive debt almost always wins that comparison. Cheap debt frequently does not, and treating all debt as equally urgent leads people to make genuinely worse decisions while feeling responsible.",
        ],
      },
      {
        h: "Borrowing on purpose, in a sentence you can write down",
        p: [
          "A useful discipline before any significant borrowing is to write one sentence explaining what the debt is for, what it will cost in total rather than monthly, and what would have to happen for it to become a problem. If the sentence is difficult to write, that difficulty is information.",
          "The total cost figure matters because monthly payments are designed to feel manageable and successfully obscure the aggregate. A loan presented as a comfortable monthly amount over a long term can cost a substantial multiple of the sum borrowed, and seeing that number written down changes how some decisions look. Lenders are required to disclose it and it is rarely the number anyone quotes.",
          "None of this constitutes financial advice and the right answer varies enormously by circumstance. But the difference between debt that builds something and debt that quietly consumes a decade is usually visible in advance, in the terms and the arithmetic, to anyone who slows down long enough to look. The cost of looking is an hour. The cost of not looking is measured in years.",
        ],
      },
    ],
  },
  {
    slug: 'dollar-cost-averaging',
    sections: [
      {
        h: "What the lump sum research actually found",
        p: [
          "The caveat about lump sums deserves more detail than it usually gets, because the finding is frequently either overstated or dismissed entirely. Studies comparing immediate investment of a lump sum against spreading it over a period have generally found that immediate investment produced a better outcome in roughly two thirds of historical periods examined, across several markets.",
          "The reason is not subtle. Markets have risen over most long periods, so money invested earlier was in the market for longer and captured more of that rise. Spreading a lump sum over twelve months means, on average, holding half of it in cash for six months, and cash has historically underperformed equities over most stretches.",
          "The other third matters too. In roughly one period in three, spreading produced the better result, and those were the periods containing a significant decline shortly after the starting point. So the honest summary is that immediate investment wins more often and loses worse when it loses, which is a description of a higher-variance choice rather than an unambiguously superior one.",
        ],
      },
      {
        h: "Why the regret asymmetry is a legitimate input",
        p: [
          "There is a tendency in financial writing to treat expected value as the only rational criterion and to characterise anything else as an error. That framing is incomplete, because the consequences of an outcome are not symmetrical around the average, and neither are the consequences of the decision that produced it.",
          "An investor who commits a substantial lump sum immediately and watches it fall thirty percent within months faces a specific and severe test. If the response is to sell, the resulting damage exceeds anything the averaging approach could have cost. The value of spreading, in that scenario, is not the arithmetic but the fact that it keeps the investor in the market at all.",
          "This means the right choice depends on something the studies cannot measure: how a particular person will behave under a bad early outcome. Someone who has held through a previous decline has evidence about themselves. Someone investing a large sum for the first time does not, and choosing the lower-variance path while they find out is a reasonable use of a known cost to reduce an unknown risk.",
        ],
      },
      {
        h: "Choosing the interval and sticking to it",
        p: [
          "The frequency of contributions matters less than most people expect. Weekly, monthly and quarterly schedules produce broadly similar long-run outcomes, and the differences between them are small relative to the effect of whether the schedule runs at all. Monthly is the standard choice mainly because it matches how income arrives.",
          "What does matter is alignment with your pay date. A contribution scheduled for a day or two after money lands is far more robust than one scheduled for late in the month, because it happens before the account has been drawn down and before any ambiguity about whether this month can afford it. The difference in reliability between these two arrangements is considerable and costs nothing to capture.",
          "It is also worth setting the schedule slightly below what you can afford rather than at the limit. A contribution that occasionally bounces or has to be cancelled introduces exactly the decision point the whole approach was designed to eliminate, and each cancellation makes the next one easier. Consistency is the mechanism here, so protect it structurally rather than relying on intention.",
        ],
      },
      {
        h: "The failure mode nobody warns about",
        p: [
          "The technique has one specific vulnerability, and it is not the one people expect. The danger is not that you will stop contributing during a crash, though some do. It is that you will quietly stop contributing during a long, boring, sideways period when nothing has gone wrong and nothing has gone right and the whole exercise appears to be accomplishing nothing.",
          "Crashes are dramatic and produce a clear decision that people at least engage with consciously. Stagnation produces no decision at all. The standing order gets cancelled during a bank switch and never reinstated. A pay change disrupts the amount and the correction is postponed. A year passes and nobody noticed.",
          "The defence is a calendar reminder once a year to verify that the contribution is actually happening at the intended amount, which sounds trivial and catches this failure reliably. It is worth doing on a fixed date rather than when you think of it, since thinking of it is the thing that has already been demonstrated not to happen.",
        ],
      },
      {
        h: "What happens when your income changes",
        p: [
          "A fixed contribution set at one income level becomes progressively less meaningful as income rises, and this is the most common way that a well-established plan quietly underperforms what it could have been. The amount that represented a serious commitment at the start becomes a rounding error a decade later, while the person continues to feel they are saving diligently.",
          "The correction is to index the contribution to income rather than leaving it as a fixed sum. Reviewing it once a year, at the same time as the reliability check mentioned above, and raising it in proportion to any income increase, is enough. This single habit compounds substantially over a career and requires roughly ten minutes annually.",
          "Downward adjustments deserve the same treatment and often do not get it. Someone whose income falls will frequently maintain a contribution that no longer fits, funding it with credit or by depleting cash reserves, which is a strictly worse arrangement than temporarily reducing it. Flexibility in both directions is what makes a schedule survivable across a working life rather than only across a good decade.",
        ],
      },
      {
        h: "How this interacts with the rest of a plan",
        p: [
          "Regular investing is a contribution method, not an allocation decision, and confusing the two produces a specific error: setting up a disciplined monthly schedule into a poorly chosen or expensive fund and treating the discipline as sufficient. The schedule determines when money enters. What it enters is a separate question with a much larger effect on the outcome.",
          "It also does not resolve the horizon question. Money contributed monthly toward something needed in three years should not be in the same place as money contributed monthly toward something thirty years out, and running both through the same schedule into the same holding is a common and consequential mistake.",
          "The arrangement that generally works is a small number of separate destinations, each with its own schedule and its own holdings matched to when the money is needed. This sounds more complicated than a single transfer and in practice takes an extra afternoon to set up once. After that it runs identically and it fails considerably less often.",
        ],
      },
      {
        h: "The unglamorous case, stated plainly",
        p: [
          "Regular fixed investing is not a technique for improving returns and it is frequently sold as one, which sets up a disappointment that is entirely avoidable. Its actual function is to make a difficult behaviour automatic, and the behaviour it automates is the one that most reliably separates investors who end up with something from investors who do not.",
          "The evidence that individual investors underperform the funds they hold, because of when they buy and sell rather than what they buy, has been documented repeatedly across long periods. A mechanism that removes the buy-and-sell timing decision from a human being addresses the largest identified source of that gap directly.",
          "So the case is modest and solid. It will not beat a perfectly timed alternative, which nobody achieves anyway. It will not protect you from a falling market, which nothing does. What it does is convert investing from a series of decisions made under emotional pressure into a background process, and over thirty years that conversion is worth more than most of what gets written about instead. As always, none of this is advice, and every plan should fit the circumstances of the person running it.",
        ],
      },
      {
        h: "A worked example of what the schedule does",
        p: [
          "It helps to see the mechanism concretely rather than in the abstract. Imagine a fixed monthly sum buying units in a fund whose price moves around considerably over a year: expensive in some months, cheap in others, ending roughly where it started. The fixed sum buys few units when the price is high and many when it is low, entirely automatically, without any judgement being applied.",
          "At the end of the year, the average price you paid per unit is lower than the average price the fund traded at over the same period. This is not a trick or a rounding artefact; it follows directly from the arithmetic of buying a fixed value rather than a fixed quantity. The more the price moved around, the larger the effect.",
          "The important caveat is that this benefit relates to volatility rather than to direction. In a market that rose steadily all year, the same schedule would have paid progressively more and would have done worse than buying everything on the first day. The averaging effect is real, it is not a forecast, and it is a secondary reason to use the approach rather than the primary one.",
        ],
      },
    ],
  },
];

export function applyExpansions(all: Article[]): void {
  const bySlug = new Map(all.map((a) => [a.slug, a]));
  for (const exp of EXPANSIONS) {
    const article = bySlug.get(exp.slug);
    if (!article) continue;
    article.sections.push(...exp.sections);
    if (exp.title) article.title = exp.title;
    if (exp.excerpt) article.excerpt = exp.excerpt;
  }
}
