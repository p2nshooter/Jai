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
  {
    slug: 'raise-negotiation-basics',
    sections: [
      {
        h: "Finding out what the work is actually worth",
        p: [
          "Most people asking for a raise are working from a number they generated internally, which means it is anchored to their current salary rather than to the market. This is why requests cluster around modest percentage increases regardless of how far below market the starting point was, and it is the single largest avoidable error in the process.",
          "The market figure exists and it is more findable than people assume. Published salary surveys for your field and region, job advertisements for equivalent roles that state a range, recruiters who will tell you candidly what they are placing people at, and colleagues who have moved recently and are willing to talk. Any two of these triangulate reasonably well.",
          "The reason this matters more than the presentation of your case is that it determines what you are asking for. Someone thirty percent below market who asks for five percent has spent their negotiating capital reaching a position still substantially below market, and will need to repeat the exercise annually for years to close a gap that a single well-informed conversation might have addressed.",
        ],
      },
      {
        h: "The record you should have been keeping",
        p: [
          "The specific difficulty in these conversations is that the person deciding usually does not have detailed knowledge of what you did. They have an impression, formed from a handful of visible moments and whatever they happened to be aware of. The purpose of a running record is to convert your year into something they can evaluate rather than something they must recall.",
          "What belongs in it is narrower than people assume. Not a list of tasks completed, which describes the job rather than your performance in it, but instances where an outcome was measurably better because of something you specifically did. A problem that would have cost something and did not. A process that took less time afterwards. Revenue, cost, risk or time, ideally with a number attached.",
          "Keeping this contemporaneously takes about five minutes a month and is enormously easier than reconstructing a year in the week before a review. It also has a second use: the same record is what you need when applying elsewhere, and the version written a week after the event is consistently better than the version remembered eleven months later.",
        ],
      },
      {
        h: "Timing the conversation deliberately",
        p: [
          "Compensation decisions are made inside a budgeting process with its own calendar, and a request that arrives after those decisions are set gets a sympathetic hearing and no money. Finding out when your organisation actually allocates its salary budget, which is often several months before increases take effect, is worth more than any improvement in how you phrase the request.",
          "The individual timing matters too. Immediately after you have delivered something visible and successful is a materially different moment from a routine Tuesday, and the difference is not manipulation, it is simply that the evidence is present in the room rather than being described from memory.",
          "What is worth avoiding is the annual review as the only venue. Reviews are frequently structured to assess performance against objectives rather than to negotiate, and the person conducting yours may have no authority over pay at all. A separate, explicitly framed conversation with whoever does have that authority is a different meeting with a different purpose, and treating it as such tends to work better.",
        ],
      },
      {
        h: "What to do when the answer is no",
        p: [
          "A refusal is information rather than a conclusion, and the most valuable part of the conversation frequently happens after it. The question worth asking immediately is what specifically would need to be true for the answer to be different, and when that could be revisited. A concrete answer gives you a plan. A vague answer gives you different but equally useful information about whether this is a place where the number will ever move.",
          "It is also worth separating a no about you from a no about the organisation. Budget freezes, sector conditions and internal pay bands produce refusals that have nothing to do with your performance, and treating those as a personal verdict leads people to either give up or leave a job they liked for reasons that were never about them.",
          "Where a refusal is structural and recurring, the honest conclusion is that the market rate for your work is available elsewhere and not here. That is a legitimate finding and acting on it is not disloyalty. Compensation research consistently shows that changing employer produces larger increases than internal progression, which is an uncomfortable fact about how most pay structures operate rather than a recommendation to be restless.",
        ],
      },
      {
        h: "The parts of the package that are not salary",
        p: [
          "Salary is the most visible element of compensation and frequently the least flexible, because it sits inside bands and sets precedents. Other elements are often easier to move and can be worth a substantial amount, particularly to the specific person receiving them.",
          "Employer pension contributions are the clearest example and the most consistently undervalued. An increase in contribution rate is money that compounds for decades and is frequently not counted by employees when comparing offers. Additional leave, flexible or remote arrangements that eliminate a commuting cost, training budgets that build the skills that raise your future market rate, and professional membership fees all carry real value.",
          "There is a caution here worth stating. These elements are genuinely valuable and they are also the ones offered when salary will not move, and accepting them repeatedly in place of salary leaves your base compensation drifting further below market each year. They are best treated as additions to a satisfactory number rather than as substitutes for an unsatisfactory one.",
        ],
      },
      {
        h: "Building the skill without leaving the job",
        p: [
          "The advice to invest in skills is universally offered and rarely made specific, which limits its usefulness. The version that works is to identify what the roles one level above yours actually require, which is findable from their job descriptions, and to acquire those things deliberately rather than accumulating capability at random.",
          "The most efficient route is usually inside your current work. Volunteering for the project that uses the skill you lack is faster, better evidenced and considerably cheaper than a course, and it produces the thing that matters more than the skill itself: a demonstrable instance of having done it. Certification without application is weak evidence and everyone assessing candidates knows this.",
          "The exception is where a formal credential is a gate rather than a signal, which is true in some regulated fields and false in most others. Establishing which situation you are in before spending money is worth doing, because the two cases justify very different amounts of investment and people frequently assume they are in the first when they are in the second.",
        ],
      },
      {
        h: "Why the income side eventually caps out too",
        p: [
          "The argument that income has a higher ceiling than expenses have a floor is correct and it is not unlimited, and it is worth saying because the pursuit of higher income has its own costs that a purely financial framing misses. Roles that pay substantially more frequently demand more hours, more travel, more availability and more responsibility for outcomes that keep you awake.",
          "There is a genuine trade being made and it is not always favourable. A significant increase in income that comes with a significant increase in hours may represent a lower effective rate, and one that comes with sustained stress may cost more in health and relationships than it delivers in money. These are not reasons to avoid advancement; they are reasons to evaluate specific opportunities rather than assuming higher is better.",
          "The framing that holds up is that both levers matter and neither is sufficient alone. A rising income with a widening gap between earning and spending is the combination that compounds. A rising income with a proportionally rising lifestyle is a busier version of the same position. And the point of any of it, as with everything on this site, is to buy security and choice rather than to maximise a number. None of this is financial advice; it is a description of how the two levers interact.",
        ],
      },
    ],
  },
  {
    slug: 'net-worth-track',
    sections: [
      {
        h: "Valuing the things that are hard to value",
        p: [
          "The calculation is straightforward for cash and investments, where a current figure is available, and considerably less straightforward for everything else. Property, vehicles, pensions with a defined benefit component and any business interest all require a judgement, and the judgement you make determines whether the resulting number tells you anything useful.",
          "The convention that produces the most honest result is conservative valuation. Use the lower end of any plausible range for property, use realistic resale value rather than purchase price for vehicles, and exclude anything you would never actually sell. Household possessions are the clearest case: they have real value in principle and no realistic disposal value, and including them inflates the number without improving the information.",
          "Consistency matters more than precision. A figure calculated the same way each time reveals the trend accurately even if the absolute level is somewhat off. A figure where the property valuation is revised upward whenever you feel optimistic reveals nothing at all, and the temptation to do exactly that is stronger than most people expect.",
        ],
      },
      {
        h: "What the number does not capture",
        p: [
          "Net worth is a good measure of accumulated financial position and it is silent on several things that matter enormously to your actual security. The most important is liquidity: two people with identical net worth, one holding it in accessible investments and the other entirely in home equity, are in very different positions when something goes wrong.",
          "It is also silent on the stability of the income that is building it, on the concentration of the assets, and on any obligation that is real but not a formal liability, such as expected support for family members. A single figure necessarily compresses all of this, which is fine provided you remember that the compression happened.",
          "The practical response is to track one or two supplementary figures alongside it. Liquid net worth, meaning the portion you could access within a month, is the most useful. Months of essential expenses covered by accessible assets is another. Neither takes additional effort since you have already listed everything, and together they describe the position considerably better than the headline figure alone.",
        ],
      },
      {
        h: "Reading the trend rather than the level",
        p: [
          "The absolute number invites comparison and comparison is where this practice usually goes wrong. Net worth at any given moment is heavily determined by age, inheritance, housing market timing and the sector you happen to work in, none of which are meaningful measures of how well you are managing money.",
          "The trend, by contrast, is almost entirely about your own behaviour, which makes it the part worth attending to. A steadily rising line means your habits are working regardless of where the line sits. A flat line during years of solid income is a clear signal that something is absorbing everything, and it prompts the right question in a way that no amount of general reflection does.",
          "One refinement makes the trend considerably more informative: separate the change caused by your own contributions from the change caused by market movement. The first is what you control. The second is noise over short periods and matters over long ones. Conflating them produces false confidence in good years and unwarranted discouragement in bad ones.",
        ],
      },
      {
        h: "Starting from a negative number",
        p: [
          "A substantial share of people who calculate this for the first time get a negative result, typically because of student borrowing, a mortgage taken recently or consumer debt accumulated over several years. The instinct is to stop doing the exercise, which is precisely the wrong response, because a negative figure moving in the right direction is a better position than a positive figure moving in the wrong one.",
          "It is also worth noting that a negative net worth early in a working life, arising from an investment in education or a property purchase, is a structurally different situation from a negative figure arising from consumer debt at high rates. Both are negative and only one is a problem requiring urgent attention. The single number does not distinguish between them and you should.",
          "The most useful framing for anyone in this position is to focus on the crossing point rather than the level: the date at which the line reaches zero, projected from the current rate of change. That is a concrete and achievable target, it moves closer with every payment, and it converts a discouraging figure into a countdown.",
        ],
      },
      {
        h: "How often to look, and why less is more",
        p: [
          "Monthly calculation is the common recommendation and quarterly is probably better for most people, with annual being entirely adequate. The reason is that the value of this exercise lies in the trend across years, and increasing the sampling frequency does not improve the trend while it does increase exposure to short-term market noise.",
          "There is a documented behavioural pattern here worth knowing about: investors who monitor their positions more frequently observe more losses, because losses are more common over short intervals than long ones, and they consequently take less risk than their horizon justifies. Frequent net worth tracking is a mild version of the same mechanism.",
          "A reasonable arrangement is a quarterly calculation recorded in a single spreadsheet with one row per quarter, taking perhaps fifteen minutes, plus an annual review where you actually look at the whole series and think about what it shows. The record accumulating over a decade is the asset here, and it only exists if the process is light enough that you keep doing it.",
        ],
      },
      {
        h: "The comparison problem",
        p: [
          "Publishing net worth benchmarks by age has become common and the figures circulate widely, usually without the context that would make them interpretable. They are typically drawn from populations with very different circumstances, they are frequently medians presented in ways that read as targets, and they take no account of housing costs, family structure or the local cost of living.",
          "The effect of encountering these is reliably one of two things, both unhelpful. Someone above the figure concludes they are doing well and relaxes, which may be false if their trajectory is poor. Someone below concludes they are behind and either despairs or takes inappropriate risk trying to catch up, which is how a substantial amount of retail money finds its way into things it should not.",
          "The only comparison that carries information is with your own previous figures. It controls for every variable that the external comparison does not, it measures precisely the thing you can influence, and it cannot be gamed. A line that has risen every year for a decade is unambiguous evidence that the system is working, whatever anyone else's number happens to be.",
        ],
      },
      {
        h: "Turning the number into a decision",
        p: [
          "Tracking is only worthwhile if it occasionally changes what you do, and the specific decisions it should inform are worth naming. A rising liquid portion suggests the emergency buffer is adequate and contributions can shift toward longer-term holdings. A concentration that has grown unnoticed, where one asset now dominates, is a signal to rebalance.",
          "A flat trend during a period of solid income prompts an examination of the gap between earning and spending, which is the underlying driver and the thing that is actually adjustable. A trend that improved sharply in one year is worth understanding, since if it was a windfall rather than a habit change, the improvement will not repeat.",
          "Used this way the calculation stops being a scoreboard and becomes a diagnostic, which is a considerably more useful thing for it to be. It takes fifteen minutes a quarter, requires no software, and produces a record that will tell you more about your financial life in ten years than any single decision you make this month. None of this is financial advice, and the right response to any given trend depends on circumstances the number cannot see.",
        ],
      },
    ],
  },
  {
    slug: 'retirement-three-levers',
    sections: [
      {
        h: "The fourth lever nobody wants to discuss",
        p: [
          "The three levers described here are the ones you control most directly during your working life, and there is a fourth that has at least as much influence on the outcome: when you stop, and whether you stop entirely. It gets less attention because it feels like a constraint rather than a choice, and for many people it partly is.",
          "The arithmetic is nonetheless striking. Working two additional years does three things simultaneously: it adds two years of contributions, it removes two years of withdrawals, and it shortens the period the money must last. Those effects compound with each other, which is why a delay that sounds modest can improve the sustainable withdrawal figure substantially.",
          "The same mechanism works in reverse and explains why involuntary early retirement is so financially damaging. A significant share of people stop working earlier than planned, through health, redundancy or caring responsibilities, which means a plan that depends on working to a specific late date is depending on something partly outside your control. Building in a margin for stopping earlier than intended is prudent rather than pessimistic.",
        ],
      },
      {
        h: "What the employer match is actually worth",
        p: [
          "Where an employer matches contributions, the advice to capture the full match is universal and the reason it matters is frequently understated. A match is an immediate return on the contributed amount, before any investment growth, of a size that no investment reliably offers. Declining it is turning down part of your compensation.",
          "The detail worth checking is how the match is structured, because the arrangements vary and the differences matter. Some match up to a fixed percentage of salary, some match a proportion of whatever you contribute up to a cap, and some require a minimum contribution before any match applies. Contributing below the threshold in the last case captures nothing at all.",
          "Vesting is the other thing to check. Some schemes require a period of service before the employer contributions become genuinely yours, and leaving before that point forfeits them. This does not change whether to contribute, since the alternative is to forfeit them certainly, but it is worth knowing when comparing an offer elsewhere against staying.",
        ],
      },
      {
        h: "Where retirement fees hide specifically",
        p: [
          "The cost lever is the most controllable of the three and also the hardest to see, because retirement accounts frequently carry charges at more than one level and no single document shows the total. There is typically a charge for administering the account itself, a charge within each fund held, and in some arrangements a further charge for advice, whether or not advice is being received.",
          "Legacy accounts from previous employers are where the worst examples concentrate. A scheme joined fifteen years ago may be charging several times what a current one would, invested in a default fund chosen under an older regime, and nobody has any incentive to tell you. Locating and reviewing old accounts is a well-defined afternoon of work with an unusually clear payoff.",
          "The other place worth checking is the default fund itself. Defaults are chosen to be broadly suitable rather than optimal, and in many schemes they carry higher charges than alternative options available within the same scheme to anyone who asks. A substantial number of people remain in a default they never chose for an entire career without ever discovering that a cheaper option was one form away.",
        ],
      },
      {
        h: "Contribution rates and what they actually produce",
        p: [
          "Advice on how much to contribute tends to arrive as a single percentage, which conceals that the required rate depends heavily on when you start. Someone beginning in their twenties needs a considerably lower rate than someone beginning in their forties to reach the same position, and quoting a single figure to both is misleading in opposite directions.",
          "A more useful way to think about it is in terms of the replacement ratio: what proportion of your final working income the plan will produce. This is the number that determines whether retirement feels like continuity or like a reduction, and it is calculable in rough terms from the contribution rate, the years remaining and a conservative return assumption.",
          "Doing this calculation once, with a genuinely conservative return figure and adjusted for inflation, is uncomfortable and valuable. It usually reveals that the contribution rate people default to is lower than what their expectations require, and it reveals it while there is still time to change something. Finding out at sixty is finding out too late to do much about it.",
        ],
      },
      {
        h: "The state provision that fits underneath",
        p: [
          "Most countries have some form of public retirement provision, and its role in a plan is frequently either ignored entirely or relied upon too heavily. Neither is right. It typically provides a foundation that covers basic costs and does not approach a comfortable standard of living, which means it changes how much private provision is needed rather than whether it is needed.",
          "What is worth doing is finding out what you are actually entitled to, which usually requires a contribution record that you can check and which contains errors more often than people expect. Gaps from periods of study, caring or self-employment can reduce entitlement, and in some systems those gaps can be filled retrospectively at a cost that is small relative to the benefit.",
          "The planning implication is that state provision reduces the amount your own savings must generate, particularly for lower earners where it replaces a higher proportion of income. Building a plan that ignores it will overestimate what you need. Building one that assumes it will remain unchanged for forty years assumes something no government has ever guaranteed. A reasonable approach counts it and does not depend on it.",
        ],
      },
      {
        h: "How the levers interact with each other",
        p: [
          "Treating the three levers as independent understates how much they reinforce one another, and the interaction is where the case for acting early becomes strongest. Starting earlier means each contribution has longer to compound, which means a lower contribution rate achieves the same result, which means the plan is easier to sustain, which means it is less likely to be interrupted.",
          "Costs interact with time in the same multiplicative way. A percentage point of annual charge applied for forty years removes far more than twice what it removes over twenty, because it is compounding against a compounding balance. This is why the fee lever, which looks like the smallest of the three, frequently turns out to be comparable in effect to a meaningful change in contribution rate.",
          "The practical consequence is that a plan that is mediocre on all three levers is considerably worse than the individual shortfalls suggest, and a plan that is decent on all three is considerably better. This is encouraging rather than otherwise, since modest improvements applied to each simultaneously produce a disproportionate combined effect.",
        ],
      },
      {
        h: "Reviewing without redesigning",
        p: [
          "Retirement plans fail more often from neglect than from poor design, and the neglect is understandable given that the feedback arrives decades late. A structured annual review addresses this at low cost, and it should be narrow enough that it actually happens.",
          "Four things are worth checking each year: that contributions are still going in at the intended rate, that the rate has kept pace with any income increase, that the charges have not changed, and that any accounts from previous employers are accounted for rather than forgotten. That is the entire review and it takes under an hour.",
          "What should not be part of it is reconsidering the investment strategy based on the last twelve months, which is the review most people actually perform and the one most likely to do damage. The strategy should change when your circumstances or horizon change, not when returns have been disappointing. Separating the maintenance review from the strategy question, and scheduling only the first of them annually, is a small structural decision that protects a plan from its owner across several decades. None of this is financial advice, and specific arrangements vary considerably by country and scheme.",
        ],
      },
      {
        h: "Why the complexity exists at all",
        p: [
          "It is worth understanding why retirement planning feels so much harder than three levers would suggest, because the reason is not that the underlying problem is genuinely complicated. Much of the apparent complexity is regulatory, arising from decades of accumulated rules, transitional arrangements and account types that were introduced for reasons no longer relevant.",
          "The rest of it is commercial. Complexity supports intermediation, and an industry that earns fees for guidance has limited incentive to emphasise how few decisions actually determine the outcome. This is not a conspiracy so much as a structural feature, and it is visible in the way products are named, documented and sold.",
          "Recognising this is practically useful because it changes how you allocate attention. The hours are better spent verifying the three levers than on understanding the full taxonomy of account types, most of which will never apply to you. Getting the levers right in a simple arrangement beats getting them wrong in a sophisticated one, and the second outcome is considerably more common than the first.",
        ],
      },
    ],
  },
  {
    slug: 'raise-negotiation-basics',
    sections: [
      {
        h: "Income streams beyond the single employer",
        p: [
          "Everything discussed so far assumes one income from one source, which for most people is the right place to concentrate effort because it is the largest number and the most improvable. It is also, structurally, a single point of failure, and the case for a secondary stream is about resilience rather than about the money it produces initially.",
          "The realistic version of this is modest. A second income built alongside full-time work is usually small relative to the main one for a considerable period, and the honest framing is that its first year is an investment of time with a poor immediate return. What it produces earlier than money is optionality: a partial buffer against the main income stopping, and evidence about whether the thing could ever become larger.",
          "The failure mode worth avoiding is a second activity that consumes the energy which would otherwise have gone into raising the primary income. For most people, an increase in the main salary is available faster, more reliably and for less effort than an equivalent amount earned elsewhere, which is why the order of operations here matters as much as the ambition.",
        ],
      },
    ],
  },
  {
    slug: 'net-worth-track',
    sections: [
      {
        h: "Sharing the number, or not",
        p: [
          "Whether to discuss this figure with a partner is not really an open question in a shared financial life, and the more useful discussion is about how. Couples who track a household figure alongside individual ones tend to have fewer conflicts about money, largely because disagreements become disagreements about a shared visible object rather than about character.",
          "The mechanics that work are unremarkable: the same quarterly calculation, done together, with both people seeing the full picture including anything either would rather not mention. The first occasion is frequently uncomfortable and the discomfort is nearly always about disclosure rather than about the numbers themselves, which is worth knowing in advance.",
          "Beyond a partner, the case for discretion is strong. Discussing net worth with friends, family or colleagues reliably produces comparison, and comparison in either direction changes behaviour without adding information. The figure is a tool for managing your own decisions, and it works better when it is not also serving as a social signal.",
        ],
      },
    ],
  },
  {
    slug: 'money-and-happiness',
    sections: [
      {
        h: "What the famous threshold study actually claimed",
        p: [
          "The widely repeated finding that wellbeing stops improving above a certain income level came from a specific piece of research that distinguished between two things people usually conflate. One was day-to-day emotional experience, meaning how much of an ordinary day is spent in a pleasant or unpleasant state. The other was life evaluation, meaning how you rate your life overall when asked to reflect on it.",
          "The study found that the first appeared to plateau above a threshold while the second continued rising with income. Subsequent work using different measurement methods has challenged the plateau, finding continued improvement in both measures well above the original figure, though with the rate of improvement slowing considerably.",
          "The honest summary of the current position is that more money continues to help on average, that the help per additional unit diminishes, and that the effect is smaller than most people assume when they are pursuing it. That is a more useful conclusion than a hard threshold, because it does not invite the mistake of concluding that beyond some number the pursuit is pointless.",
        ],
      },
      {
        h: "Averages conceal enormous individual variation",
        p: [
          "Nearly all of this research reports population averages, and the variation around those averages is large enough that the average describes almost nobody in particular. Some people show a strong relationship between income and wellbeing across the whole range. Others show almost none. The two groups are mixed together in every headline figure.",
          "Later analysis has suggested that the plateau effect is concentrated among a subset of people who are unhappy for reasons money does not address, while for others the improvement continues indefinitely. This is intuitively plausible and it has an important implication: the research cannot tell you which group you are in, and general conclusions drawn from it may not apply to your situation at all.",
          "The practical response is to treat the findings as a reason to be sceptical of your own assumptions rather than as a rule. Someone assuming that a higher income will resolve a persistent dissatisfaction has evidence to consider. So does someone assuming that money beyond a certain point makes no difference, which is equally unsupported as a general claim.",
        ],
      },
      {
        h: "The specific misery of financial uncertainty",
        p: [
          "One finding is unusually consistent across studies and populations: the damage done by financial insecurity is disproportionate to the amounts involved. Not having enough is bad. Not knowing whether you will have enough is measurably worse on several dimensions, including sleep, cognitive performance and physical health.",
          "The mechanism appears to be that uncertainty demands ongoing attention in a way that a known constraint does not. A person on a low but predictable income can plan around it. A person on a variable income that is sometimes adequate and sometimes not cannot, and the cost of that permanent open question shows up in domains apparently unrelated to money.",
          "This is the strongest evidence-based argument for the unglamorous parts of a financial plan. An emergency fund and freedom from high-interest debt do not increase income at all, and they convert an uncertain financial position into a predictable one. On the wellbeing measures, that conversion appears to be worth considerably more than an equivalent sum spent on anything else.",
        ],
      },
      {
        h: "Why the experiences finding is more complicated than it sounds",
        p: [
          "The advice to spend on experiences rather than possessions is well supported and it is frequently applied too broadly. The research finding is about average satisfaction reported after the fact, and it is driven substantially by the fact that experiences are typically social, memorable and not directly comparable to other people's.",
          "Those three properties are the active ingredients rather than the experience category itself. A possession that is social, memorable and not subject to comparison behaves like an experience on these measures. A solitary, forgettable and status-comparable experience behaves like a possession. The category is a useful proxy and it is not the mechanism.",
          "This matters because it gives a better filter than the simple rule. Rather than asking whether something is an experience, ask whether it will produce a memory, whether it involves people you care about, and whether your satisfaction with it depends on what other people have. Purchases that score well on those three tend to hold up regardless of which category they nominally fall into.",
        ],
      },
      {
        h: "Buying time is the most underused option",
        p: [
          "Among the specific spending patterns that research associates with higher wellbeing, paying to eliminate disliked tasks stands out as both effective and rarely done, including by people who can comfortably afford it. Studies across several countries have found that people who spend money to save time report higher life satisfaction, and that most people do not do it even when they have the means.",
          "The reason for the reluctance appears to be that time-saving purchases feel indulgent in a way that equivalent spending on objects does not. Paying someone to do a chore reads as laziness in a way that buying something of the same price does not, which is a cultural judgement rather than an economic one and it costs people a measurable amount of wellbeing.",
          "The practical version is narrow and worth doing: identify the recurring task you dislike most, find out what it would cost to stop doing it, and compare that to what you spend on things you enjoy less. The comparison frequently favours the time purchase by a wide margin, and the benefit recurs every week rather than fading.",
        ],
      },
      {
        h: "The adaptation problem and what resists it",
        p: [
          "The reason money delivers less happiness than expected is largely explained by adaptation: the reliable tendency for any improvement in circumstances to become the new baseline within a surprisingly short period. This applies to income increases, home upgrades, possessions and most other positive changes, and it applies faster than people predict.",
          "What is more interesting is the list of things that resist it. Reduced commuting appears to resist adaptation substantially. So does chronic pain relief, improved sleep, and the removal of an ongoing source of noise or stress. The common feature is that these remove a recurring negative rather than adding a recurring positive, and the human capacity to adapt to removed irritations is much weaker than the capacity to adapt to new pleasures.",
          "This provides a genuinely actionable filter for large spending decisions. Money directed at eliminating something that reliably makes your weeks worse tends to keep paying. Money directed at adding something that makes a week better tends to stop paying within a couple of months. Both are legitimate uses; only one of them is durable.",
        ],
      },
      {
        h: "Where the research runs out",
        p: [
          "It is worth marking the limits of all this, because wellbeing research is genuinely difficult and the confidence with which its findings get repeated frequently exceeds what the underlying work supports. Self-reported happiness is a noisy measure, cross-cultural comparison is fraught, and most of these studies establish correlation in populations rather than causation in individuals.",
          "There is also a selection effect in what gets popularised. Findings that are surprising, quotable and actionable circulate widely; findings that are equivocal or contradict a previous headline do not. The result is that public understanding of this literature lags the literature itself by a considerable margin and is skewed toward the tidier results.",
          "None of which makes it useless. The broad shape holds up: security matters more than luxury, how you spend matters as well as how much, adaptation erodes most gains, and removing negatives outlasts adding positives. Those are defensible conclusions and they are enough to inform how you use money without requiring anyone to treat a research finding as a rule for their own life. As always, this is educational rather than advice.",
        ],
      },
      {
        h: "Spending on other people, and the caveat",
        p: [
          "Among the more robust findings in this area is that money spent on others tends to produce more reported wellbeing than the same amount spent on yourself, an effect that has replicated across several countries and income levels. It is one of the more surprising results in the field and one of the easiest to act on.",
          "The caveat that usually gets dropped is that the effect depends heavily on the spending being voluntary and on the giver seeing some connection to the outcome. Obligatory contributions, transfers made under social pressure, and anonymous giving into a large undifferentiated pool all show weaker effects. The mechanism appears to involve the relationship rather than the transfer.",
          "This has a practical implication that is worth stating carefully. Directing generosity toward specific people or causes where you can see what the money did is likely to feel meaningfully different from an equivalent automatic deduction, even though the money is identical. That is a fact about how the giving affects you rather than a reason to prefer one over the other, and both have their place.",
        ],
      },
      {
        h: "The point of the whole exercise",
        p: [
          "Everything discussed across this site — the saving rate, the index funds, the emergency buffer, the debt discipline — is instrumental. None of it is worth anything in itself, and it is easy to spend a decade optimising the instruments while losing track of what they were meant to produce.",
          "What they produce, on the evidence, is a specific and limited set of things: relief from the persistent low-grade stress of financial uncertainty, the ability to absorb a setback without it becoming a catastrophe, and a growing set of options about how to spend your time and whose terms you accept. Those are real and they are not the same as luxury.",
          "The failure mode worth watching for is the plan that becomes the point. Someone accumulating steadily while postponing every use of the money indefinitely has converted a means into an end, and the research on adaptation suggests they will not find the accumulated figure delivers what the postponement cost. Building the security and then actually using the options it buys is the whole design. The number was never the objective.",
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
