import React from 'react';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';

/** Place after goToRecipeDetails callbacks that receive serves (retailer). Pass anchor only on the canonical recipe-card page. */
export function GuestCountTip(props) {
  return (
    <>
      {props.anchor ? <span id="guest-count-basket-vs-ui" /> : null}
      <Admonition type="tip" title="Serves">
        <p>
          Inside Mealz WebViews, SSR resolves portions automatically: if the recipe is already in the basket,
          the basket guest count wins over the recipe default. When you handle <code>goToRecipeDetails</code>, always
          forward the <code>serves</code> argument as-is into <code>RecipeDetailsScreen</code> /{' '}
          <code>RecipeDetailsViewController</code> — do not substitute your own default or the recipe&apos;s
          number-of-guests.
        </p>
      </Admonition>
    </>
  );
}

/** Place next to UI serves parameters in retailer mode (recipe-details, …). */
export function ServesParamWarning(props) {
  return (
    <Admonition type="warning" title="Serves">
      <p>
        Do not choose an arbitrary <code>serves</code> value. If the recipe is already in the basket,{' '}
        <code>serves</code> must reflect the basket guest count (usually forwarded unchanged from{' '}
        <code>goToRecipeDetails</code>). Opening a screen with an arbitrary <code>serves</code> while the recipe
        is in-basket can desync portions/ingredients.
      </p>
    </Admonition>
  );
}

/** No Supplier: host owns the serves counter UI/logic. */
export function NoSupplierGuestCountTip() {
  return (
    <>
      <span id="no-supplier-guest-count" />
      <Admonition type="tip" title="Serves">
        <p>
          In No Supplier mode, <strong>you</strong> own the guest-count counter UI and logic. Pass that same{' '}
          <code>serves</code> into Mealz components (<code>RecipePricing</code>, Add to Cart CTA,{' '}
          <code>RecipeDetails</code>). When <code>goToRecipeDetails</code> gives you a <code>serves</code> argument,
          forward it as-is into <code>RecipeDetailsScreen</code> / <code>RecipeDetailsViewController</code> — it should
          match your counter (and the Mealz basket once the recipe is added). Do not substitute a different default.
        </p>
      </Admonition>
    </>
  );
}

/** No Supplier: keep host counter and Mealz screens on the same serves. */
export function NoSupplierServesParamWarning() {
  return (
    <Admonition type="warning" title="Serves">
      <p>
        Pass the guest count from <strong>your</strong> No Supplier serves counter — the value your UI currently
        shows. Do not pick an arbitrary unrelated number. If the recipe is already in the Mealz basket,{' '}
        <code>serves</code> must stay aligned with that basket guest count (the same value you manage in your
        counter). Opening pricing, add-to-cart, or details with a mismatched <code>serves</code> can desync
        portions/ingredients.
      </p>
    </Admonition>
  );
}
