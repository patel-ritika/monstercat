import React from 'react';
import "../../asset/styles/lostcivilaization/lost_info.css";
import islandImage from "../../asset/images/lost/img1.jpg"; // Import an example image

const Lost_info = () => {
  return (
    <div className="lost-info">
			<div className="text-section">
				<h2>Chapter 1</h2>
				<p>
					Long ago when the world was new and Earth as we know it had not yet
					manifested, two powerful forces awoke below the sea: Instinct and
					Uncaged. In perfect balance, these forces gathered energy deep beneath
					the rolling ocean waves, a pulsing heartbeat below the surface. The
					energies continued to expand until the Earth itself was pushed apart.
					This tremendous force rose from the ocean, rumbling to the surface in
					the form of a massive volcano. Its draw pulled in the surrounding
					lands to create a singular island made up of four disparate parts.
				</p>
				<p>
					Northern winds carried the volcano’s falling ash to fertilize a
					verdant and wild Jungle. In the South, volcanic rock crashed and
					tumbled, building a beautiful and dangerous Mountain range. Westward,
					the rumbling and shifting of the new land birthed a series of Canyons
					and waterfalls, the calls of wildlife echoing off its walls. And
					relentless, howling winds traveled East across the Island, drying the
					land into a vast desert that became home to only the most resilient of
					creatures. Across this vast Island, the dual forces of Instinct and
					Uncaged hummed in harmony.
				</p>{" "}
				<div className="image-section">
					<img src={islandImage} alt="Lost Civilization Island" />
				</div>
				<p>
					Eventually, human explorers were beckoned to the island by this
					mysterious hum as well. Through the music of the Island, barriers of
					language and origin melted away. Emotion and intent entangled together
					until a single language emerged, translated by the island itself,
					freeing the flow of information and new ideas. These travelers
					collaborated together on many projects, traversing each biome to
					celebrate the diverse cultures brought to and born from the Island.
					Monuments were built and songs were shared.
				</p>{" "}
				<p>
					This spirit of community was the last piece needed for the island’s
					musical essence to take its final shape. From the bustle of activity,
					and positivity of communal sharing arose a distinct figure - enigmatic
					at first, but unmistakable in full-sight. It was the first incarnation
					of Monstercat.
				</p>
				<p>
					Either a conduit for the mysterious forces of the Island, or a
					manifestation of the power, Monstercat seemed to have the ability to
					draw people together. As the guardian of this hidden Island,
					Monstercat had a sacred duty to protect the power of Instinct and
					Uncaged, and to invite those worthy of exploring its secrets.
					Eventually Monstercat became a legend, a guide for the humans. The
					spirit that pulled them to the island and encouraged them all to
					celebrate life together.
				</p>
				<p>
					Time, however, continued its relentless march forward. These explorers
					eventually dispersed in pursuit of new lands and adventures. Each
					visitor would leave something of themselves back on the Island for
					those that were drawn in by the island’s music next. These first
					inhabitants spread the stories of the island, and of the mysterious
					cat, far and wide. And as they left, they also kept a piece of the
					island within themselves, along with a certainty that Monstercat
					would, at the very moment it was needed most, issue a call of the wild
					and lead a civilization anew.
				</p>
				<p>All that was needed was for people to seek the island again…</p>
			</div>
			{/* Image Section */}
		</div>
  );
}

export default Lost_info;
