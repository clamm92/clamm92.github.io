import { useState } from "react";
import OverviewBlock from "./blocks/OverviewBlock";
import BulletsBlock from "./blocks/BulletsBlock";
import TextBlock from "./blocks/TextBlock";
import GalleryBlock from "./blocks/GalleryBlock";
import SkillsBlock from "./blocks/SkillsBlock";

const BLOCK_RENDERERS = {
  overview: OverviewBlock,
  bullets: BulletsBlock,
  text: TextBlock,
  gallery: GalleryBlock,
  skills: SkillsBlock,
};

function DetailContentComposer({ blocks = [] }) {
  const [modalImage, setModalImage] = useState(null);

  const mediaBlocks = blocks.filter(
    (block) => block.type === "gallery" && block.images?.length
  );
  const contentBlocks = blocks.filter((block) => block.type !== "gallery");

  let blockIndex = 0;

  return (
    <>
      {mediaBlocks.length > 0 && (
        <div className="detail-panel-media">
          {mediaBlocks.map((block, index) => {
            const Renderer = BLOCK_RENDERERS.gallery;
            return (
              <Renderer
                key={`gallery-${index}`}
                {...block}
                blockIndex={blockIndex++}
                onImageClick={setModalImage}
              />
            );
          })}
        </div>
      )}

      <div className="detail-panel-blocks">
        {contentBlocks.map((block, index) => {
          const Renderer = BLOCK_RENDERERS[block.type];
          if (!Renderer) return null;

          return (
            <Renderer
              key={`${block.type}-${index}`}
              {...block}
              blockIndex={blockIndex++}
            />
          );
        })}
      </div>

      {modalImage && (
        <div className="image-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
            <img src={modalImage} alt="Enlarged view" className="image-modal-img" />
          </div>
        </div>
      )}
    </>
  );
}

export default DetailContentComposer;
