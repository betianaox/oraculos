import type { FragmentosDeTema } from '../../types';

// Topic "general" — the one the classifier uses when the question does not
// clearly fit love/work/money. Deliberately more neutral: it works for any
// area of life and assumes no particular context.
export const general: FragmentosDeTema = {
  fehu: {
    normal: [
      'the resources you already have and may not be fully valuing',
      'a solid base built by tending to what already works',
      'the prosperity that comes when what is already underway is put in order',
    ],
    invertida: [
      'the fear of falling short, whether or not anything truly is missing',
      'a need to hold on that holds back what could flow',
      'the insecurity of not knowing whether what you give comes back in some form',
    ],
  },
  uruz: {
    normal: [
      'an inner strength you have more at hand than you think',
      'the push needed to commit to something you have been putting off',
      'the vitality to face what is coming with more energy',
    ],
    invertida: [
      'the weariness of holding something up without asking for help',
      'an energy that imposes rather than accompanies',
      'the hardness that shows up when tenderness is what is really needed',
    ],
  },
  thurisaz: {
    normal: [
      'a boundary worth setting before the situation overflows',
      'the pause needed before reacting to something that bothered you',
      'the strength to defend something that truly matters',
    ],
    invertida: [
      'an impulsive reaction that can hurt more than it protects',
      'a conflict avoided instead of named',
      'a wall that pushes away instead of protecting',
    ],
  },
  ansuz: {
    normal: [
      'an honest conversation that keeps being put off',
      'the clarity to say what you really think',
      'genuine listening to what someone needs to say',
    ],
    invertida: [
      'a misunderstanding that grows for not being cleared up in time',
      'words said without thinking that leave a mark',
      'a silence that stands in for something that should be said',
    ],
  },
  raidho: {
    normal: [
      'a move toward a new stage, even if bit by bit',
      'the willingness to move, even if the path changes along the way',
      'a journey that is starting to take shape',
    ],
    invertida: [
      'the sense of being stuck while everything else seems to move',
      'a direction that got lost in the day-to-day',
      'the wear of heading in a direction that no longer convinces you',
    ],
  },
  kaunaz: {
    normal: [
      'a spark of clarity or inspiration that deserves attention',
      'a different way of looking at something that felt stuck',
      'the desire that reignites with something simple',
    ],
    invertida: [
      'a motivation that fades with routine',
      'an interest that cools without your quite noticing',
      'the lack of will to try something different for now',
    ],
  },
  gebo: {
    normal: [
      'an even exchange between what is given and received',
      'the generosity that holds up something important',
      'a gesture appreciated without expecting anything back',
    ],
    invertida: [
      'a scale that always tips to the same side',
      'the wear of giving more than you receive',
      'something that, deep down, expects a return',
    ],
  },
  wunju: {
    normal: [
      'a simple joy that needs no big reason',
      'a moment of ease after a hard stage',
      'the lightness of enjoying something without overanalyzing it',
    ],
    invertida: [
      'a forced happiness so as not to make anyone uncomfortable',
      'the apparent calm that covers something unresolved',
      'the effort of pretending everything is fine',
    ],
  },
  hagalaz: {
    normal: [
      'a sudden change that, though uncomfortable, makes room for something new',
      'a necessary break to let go of what no longer worked',
      'a jolt that sorts out your priorities',
    ],
    invertida: [
      'a break that comes with little warning',
      'the disarray left by an unexpected change',
      'the difficulty of accepting something that ended abruptly',
    ],
  },
  naudiz: {
    normal: [
      'the patience needed in a lean moment',
      'the effort held up even when resources are short',
      'perseverance in the face of a concrete obstacle',
    ],
    invertida: [
      'something held up out of fear, not conviction',
      'a need that gets mistaken for something else',
      'putting up with something that could already begin to be resolved',
    ],
  },
  isa: {
    normal: [
      'a useful pause to think with a cool head',
      'the right time before taking an important step',
      'the calm of waiting for the right moment',
    ],
    invertida: [
      'a distance that settles in out of fear of moving forward',
      'the indecision that freezes something unresolved',
      'the standstill of not daring to move yet',
    ],
  },
  jera: {
    normal: [
      'the fruits of an effort sustained over time',
      'a reward that arrives at just the right time',
      'the result of having been steady with something',
    ],
    invertida: [
      'the impatience of wanting results ahead of time',
      'the frustration of not yet seeing what was sown',
      'a process cut short before it bears fruit',
    ],
  },
  eihwaz: {
    normal: [
      'more endurance than you feel at this moment',
      'a strength that shows up just when it is needed most',
      'the courage to get through something hard',
    ],
    invertida: [
      'a rigidity that leaves no room to give',
      'a fear that paralyzes instead of driving forward',
      'the resistance to changing something that no longer works',
    ],
  },
  perthu: {
    normal: [
      'an openness to the unexpected',
      'trust that things will fall into place',
      'a mystery worth letting reveal itself',
    ],
    invertida: [
      'the need to control something that does not rest on you alone',
      'the resistance to letting go and letting things flow',
      'the discomfort of not knowing how something will go on',
    ],
  },
  algiz: {
    normal: [
      'an instinct that knows something before you fully reason it out',
      'a healthy care that protects without confining',
      'an intuition that signals when to set a boundary',
    ],
    invertida: [
      'a guard held too high that pushes away more than it protects',
      'the fear of lowering your defenses even when it is needed',
      'a distrust that weighs more than it should',
    ],
  },
  sowulo: {
    normal: [
      'a clarity that returns after a confusing stage',
      'the confidence of being on the right track',
      'an achievement that feels shared after a sustained effort',
    ],
    invertida: [
      'a forced optimism that covers something unresolved',
      'the difficulty of accepting an uncomfortable truth',
      'showing enthusiasm on the outside while something inside does not add up',
    ],
  },
  teiwaz: {
    normal: [
      'the courage to hold on to something even when it is hard',
      'honesty even when it is hard to speak',
      'a commitment defended with conviction',
    ],
    invertida: [
      'an effort made by only one of the parties involved',
      'the silent tally of who gives in more',
      'the wear of insisting on something that is no longer even',
    ],
  },
  berkana: {
    normal: [
      'a fresh start, even a small one',
      'a growth that shows after a season of change',
      'something ready to take a further step',
    ],
    invertida: [
      'a growth held back by fear of the new',
      'the wish to start over without daring to yet',
      'a beginning put off again and again',
    ],
  },
  ehwaz: {
    normal: [
      'what moves better when done as a pair',
      'a mutual trust that supports important decisions',
      'moving toward the same shared goal',
    ],
    invertida: [
      'one person holding up something that should be shared by two',
      'a trust that needs mending after a specific incident',
      'the mismatch between what each expects of the other',
    ],
  },
  mannaz: {
    normal: [
      'the support of the people close to you',
      'a real connection based on cooperation',
      'the support of a community, however small',
    ],
    invertida: [
      'the isolation of solving everything without asking for help',
      'the difficulty of leaning on others when needed',
      'a tendency to close in on yourself',
    ],
  },
  laguz: {
    normal: [
      'an intuition that knows more than reason admits',
      'an emotion worth following closely',
      'the wisdom of trusting what instinct says',
    ],
    invertida: [
      'an intense emotion that clouds clarity',
      'the overflow of feeling everything at once',
      'mistaking intensity for certainty',
    ],
  },
  ingwaz: {
    normal: [
      'something taking shape that still needs its time',
      'a potential worth letting ripen before acting',
      'a seed already planted that will bear its fruit',
    ],
    invertida: [
      'the impatience of forcing something that is not ready',
      'the urge to speed up a process that asks for calm',
      'the anxiety of not knowing how to wait for the right moment',
    ],
  },
  dagaz: {
    normal: [
      'a turning point that changes how you see something',
      'a clarity that comes after a confusing stage',
      'a beginning that shows almost overnight',
    ],
    invertida: [
      'the resistance to letting go of how things used to be',
      'the difficulty of accepting that something has already changed',
      'clinging to a version of something that is no longer there',
    ],
  },
  othala: {
    normal: [
      'the values that hold up the important decisions',
      'a root that gives meaning to what comes next',
      'respect for where you come from',
    ],
    invertida: [
      'patterns that repeat without your noticing',
      'an inherited expectation that weighs more than it should',
      'the difficulty of letting go of an old way of doing things',
    ],
  },
};
