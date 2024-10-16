import React from 'react';
import "../../../asset/styles/about/environmental/environmenttop.css";

const EnvironmentTop = () => {
  return (
    <div className="environment-container">
			<h2>Environmental Sustainability</h2>
			<div className="environment-content">
				<p>
					Monstercat is committed to reducing its company-wide carbon footprint
					and finding environmentally-focused solutions for its Ethereum-based
					transactions. To achieve these ambitions, Monstercat has partnered
					with leading environmental agencies and reforestation validators
					across the U.S. and Canada, and we’re proud to make our research on
					global energy use and carbon emissions publicly available.
				</p>
				<p>
					See below for documentation on our environmental commitments. This
					space will be periodically updated as additional data and research is
					available.
				</p>
				<a href="#">R&G Strategic - NFT Emissions Report (September 2021)</a>
				<br />
				<a href="#">Veritree Audit Report (November 2021)</a>
				<br />
				<a href="#">
					{" "}
					Gold Standard Verified Emission Reductions (January 2022)
				</a>
				<br />
				<a href="#">https://monstercat.veritree.com</a>
			</div>
		</div>
  );
}

export default EnvironmentTop;
