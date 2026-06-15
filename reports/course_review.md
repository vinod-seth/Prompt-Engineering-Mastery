# Course Review Report: Prompt Engineering Mastery

This report provides structural and content review recommendations for the Prompt Engineering Mastery course. The primary goals of this review are to:
1. **Identify and remove all indications of AI generation** (specifically, hallucinated model names, version numbers, and over-templatized phrasing).
2. **Provide modification suggestions** for improving curriculum structure, technical depth, and industry relevance.

---

## 1. Removing AI-Generation Indicators

The current course materials contain several references to future or nonexistent model versions. These are clear indicators of AI text generation and should be replaced with actual, production-ready model identifiers.

### 1.1 Hallucinated Model Names & Replacement Guide

Identify and replace the following model names across all lesson files:

| Hallucinated Model Name | File(s) & Location(s) | Correct Production Replacement | Rationale |
|:---|:---|:---|:---|
| **GPT-4.1** | `README.md`<br>`00-course-overview.mdx`<br>`01-under-the-hood.mdx`<br>`02-anatomy-perfect-prompt.mdx`<br>`05-delimiters-guardrails.mdx` | **GPT-4o** or **o1** | GPT-4.1 was never released. GPT-4o is the main frontier model; o1 is the core reasoning model. |
| **Claude Sonnet 4** | `README.md`<br>`00-course-overview.mdx`<br>`01-under-the-hood.mdx`<br>`02-anatomy-perfect-prompt.mdx`<br>`03-few-shot-prompting.mdx`<br>`04-reasoned-prompting.mdx`<br>`05-delimiters-guardrails.mdx`<br>`06-programmatic-outputs.mdx`<br>`08-evaluation-iteration.mdx`<br>`09-capstone-project.mdx` | **Claude 3.5 Sonnet** | Anthropic's current standard-bearer model is Claude 3.5 Sonnet, not Sonnet 4. |
| **claude-sonnet-4-20250514** | `01-under-the-hood.mdx`<br>`02-anatomy-perfect-prompt.mdx`<br>`03-few-shot-prompting.mdx`<br>`04-reasoned-prompting.mdx`<br>`05-delimiters-guardrails.mdx`<br>`06-programmatic-outputs.mdx` | **claude-3-5-sonnet-latest** or **claude-3-5-sonnet-20241022** | This is the actual API model string identifier used in code. |
| **Claude Opus 4** | `README.md`<br>`00-course-overview.mdx`<br>`02-anatomy-perfect-prompt.mdx` | **Claude 3 Opus** or **Claude 3.5 Opus** | Opus 4 is non-existent. |
| **o4-mini** | `00-course-overview.mdx`<br>`04-reasoned-prompting.mdx`<br>`08-evaluation-iteration.mdx` | **o3-mini** or **o1-mini** | OpenAI's current reasoning-based mini model is o3-mini. |
| **Llama 4 (Scout, Maverick)** | `README.md`<br>`00-course-overview.mdx`<br>`01-under-the-hood.mdx` | **Llama 3.1 (8B/70B/405B)** or **Llama 3.3 (70B)** | Meta's current open-source releases belong to the Llama 3/3.1/3.3 family. |

### 1.2 Model Context Window Adjustments
In `01-under-the-hood.mdx`, update the context window comparison table to match real-world specifications:
* **GPT-4o:** 128K tokens (~96,000 words) — *Correct*
* **GPT-4.1 (1M tokens):** Replace with **o1** (200K tokens) or **Gemini 1.5 Pro / 2.0 Pro** (2M+ tokens).
* **Claude Sonnet 4 (200K tokens):** Change name to **Claude 3.5 Sonnet** (200K tokens).
* **Llama 4 Scout (10M tokens):** Replace with **Llama 3.1 405B** (128K tokens) or **Gemini 2.5 Pro** (2M tokens).

### 1.3 Stylistic De-Automatization
To make the text feel more human-authored, adjust the following styling patterns:
* **De-clutter Concept Checks:** The uniform formatting of `Concept Check` boxes followed by `<details><summary>` tags in every single file looks highly templated. Vary the placement and format of these checks. Some can be open-ended reflection prompts; others can be inline quizzes without the standardized summary disclosure tags.
* **Soften Transition Phrases:** AI text generators rely heavily on transitional markers such as *"The fix is deceptively simple,"* *"Before you can command...",* or *"Here's a hard truth."* Rewrite these hooks to sound more direct and conversational.

---

## 2. Curriculum & Tech Depth Modifications

To establish this course as the premier engineering resource, the following content and structural additions are recommended:

### 2.1 Add a Section on Prompt Caching
Prompt caching is the single most important mechanism for reducing costs (up to 90%) and latency (up to 80%) in production LLM pipelines.
* **Where to add:** Introduce this in **Lesson 1.1 (Under the Hood)** or as a dedicated section in **Lesson 2.1 (Few-Shot Prompting)**.
* **What to cover:**
  * Explain how Anthropic and Google cache prompts (prefix matching).
  * Show the Python API syntax for enabling caching (e.g., adding metadata breakpoints in Claude's messages block).
  * Discuss the financial impact of caching when using large system instructions or few-shot example sets.

### 2.2 Add RAG-Specific Prompting (Module 2)
Most prompt engineers write prompts that run inside Retrieval-Augmented Generation (RAG) applications.
* **Where to add:** In **Module 2 (Lesson 2.1 or a new 2.3)**.
* **What to cover:**
  * How to prompt models to reference retrieved document chunks.
  * Handling conflicts between retrieved sources.
  * Formulating system instructions that force the model to cite exact sources (e.g., `[Doc 1, Page 3]`) and avoid drawing from training weights.

### 2.3 Deepen the Prompt Security Chapter (Lesson 3.1)
Relying entirely on instruction-based guardrails is a known security vulnerability.
* **Where to add:** **Lesson 3.1 (Delimiters, System Prompts, and Guardrails)**.
* **What to cover:**
  * Clarify that system instructions are a *soft* boundary and cannot guarantee security against sophisticated attacks (jailbreaks, cipher-based injection).
  * Teach the implementation of **Llama Guard** or dedicated safety classifiers.
  * Emphasize sanitizing outputs, not just inputs, before displaying them to users.
